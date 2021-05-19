const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const session = require('express-session');
const db = require('../database/models');
const { use } = require('../routes/users');


const controller = {

	login: (req,res)=> {
		res.render("users/login", { title: "Login", css: "/css/login.css" })
	},

	processLogin: async (req,res)=> {

		let errors = validationResult(req);

		if (errors.errors.length > 0) {
			return res.render('users/login', {
				errors: errors.mapped(),
				oldData: req.body,
				title: "Login", 
				css: "/css/login.css"
			})
		};
		
		let userToLogin = await db.User.findOne({
			where: { 
				email: req.body.email
			}
		})
		try { 
			if (userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			//por qué guarda siempre en cookies aún si el botón de rememberUser está destildado?
			if(req.body.rememberUser) {
				res.cookies('userEmail', req.body.email, { maxAge: 60000 * 2})
				}
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				return res.redirect('/')
			} else { return res.render('users/login', {errors: {password: { msg: "Contraseña inválida"}}, title: "Login", css: "/css/login.css"})}}
		
		return res.render('users/login', {
			errors: {
				email: {
					msg: 'Este mail no se halla registrado en nuestra base de datos'
				}
			},
				title: "Login", 
				css: "/css/login.css"
			
		})} catch(error) {return res.send(error)}
	},

	logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/')
	},

	profile: (req,res)=> {		
		return res.render("users/profile", 
		{ title: "Perfil", css: "/css/profile.css"})
	},

	register: (req,res)=> {
		res.cookie()
		res.render("users/register", { title: "Registro", css: "/css/register.css"})
	},

	processRegister: async (req,res) => {

		let errors = validationResult(req);

		if (errors.errors.length > 0) {
			return res.render('users/register', {
				errors: errors.mapped(),
				oldData: req.body,
				title: "Registro", 
				css: "/css/register.css"
			})
		};

		const userToCreate = await db.User.create({
			user_name: req.body.name,
			last_name: req.body.lastName,
			email: req.body.email,
			age: req.body.age,
			city: req.body.city,
			image: req.file.filename, 
			role_id: 1,
			password: bcrypt.hashSync(req.body.password, 10)
		});

			return res.redirect('/usuario/acceder')
	 
	},

	destroy: async (req, res) => {

		let userToDelete = req.session.userLogged.id;

		try { 
			await db.Cart.destroy({
				where: {
					user_id: req.params.id
				}
			});

			await db.User.destroy({
				where: { 
					id: req.params.id
				}})

		req.session.destroy();
		return res.redirect('/');

	} catch(error) {return res.send(error)}
},

cart: async (req,res) => {

	//este controller rompe todo, pero lo ideal sería que traiga el cartUser y el cartProducts del cartUser 
	//y pasárselos a la vista para que muestre los productos en el cart
	
	let userLogged = req.session.userLogged
	
	if(userLogged) {

	let cart = await db.Cart.findOne({
		where: { 
			user_id: userLogged.id
		}
	});

	let cartProducts = await db.CartProduct.findOne({ 
		where: {
			cart_id: cart.id
		}
	})

	return res.render("products/cart2", { title: "Carrito", css: "/css/cart2.css", cart, cartProducts,})
} else { return res.redirect("/usuario/acceder")}
},

addCart: async (req,res)=> {
	let categories = await db.Category.findAll();
	let sizes = await db.Size.findAll();
	let colors = await db.Color.findAll();

	let productToAdd = await db.Product.findByPk(req.params.id, {
		include: ["category", "sizes", "colors", "images"],
	});

	let userLogged = req.session.userLogged;

	//acá intentamos con un findOne en el cart con user_id = userLogged.id pero busca una 
	//columna 'UserId' que no existe (ni le pedimos)

	try { 
		
		let cartFromUser = await db.Cart.findOne({
		where: {
			id: userLogged.id
		}
	});

	if (userLogged) {

	if(cartFromUser) {
	let cartUser = await db.Cart.create({
		user_id: userLogged.id,
		cart_total: 0,
	})};
	
	const cartProductToCreate = await db.CartProduct.create({
		cart_id: cartUser.id,
		product_id: productToAdd.id,
		quantity: 1,
		unit_price: productToAdd.price,
	})

	// lo ideal sería sumar todos los unit_price de los cartProducts con el cart_id de cartUser y actualizar el
	//cart_total de cartUser

	/*let productsOnCart = await db.CartProduct.findAll({ 
		where: { 
			cart_id : cartUser.id
		 } 
		})

	let cartTotal = productsOnCart.unit_price.reduce((a, b) => a + b, 0)

	cartUser.cart_total = cartTotal
	await cartUser.save()*/

	return res.render("products/cart2", { title: "Carrito", css: "/css/cart2.css", colors, categories, sizes })
} else { return res.redirect("/usuario/acceder")}
} catch(error) {return res.send(error)}
},

destroyCart: async (req, res) => {
		try { 
			/*let cartsToDelete = await db.Cart.findAll({
				where: {
					user_id: 12
				}
			})

			await db.CartProduct.destroy({
				where: {
					cart_id: cartsToDelete.id
				}
			});

			await cartsToDelete.destroy({
				where: {
					user_id: 12
				}
			});*/
		
		return res.redirect('/');

	} catch(error) {return res.send(error)}
	}
};

module.exports = controller;