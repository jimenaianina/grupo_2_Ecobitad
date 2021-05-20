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
			if(req.body.rememberUser != undefined) {
				res.cookie('userEmail', req.body.email, { maxAge: 6000 * 2})
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
			role_id: 3,
			password: bcrypt.hashSync(req.body.password, 10)
		});

		const cartToCreate = await db.Cart.create({
            user_id: userToCreate.id,
            cart_total: 0,
        });

			return res.redirect('/usuario/acceder')
	 
	},
	
	edit: async (req, res) => {
		
		let user = await db.User.findByPk(req.params.id);
			
		return res.render("users/editForm", 
		{ title: "Editar usuario", css: "/css/editUser.css", user: user})
	},
	},
	
	update:  async (req, res) => {

		let errors = validationResult(req);

		let user = await db.User.findByPk(req.params.id)

		if (errors.errors.length > 0) {
			return res.render('users/editForm', {
				errors: errors.mapped(),
				oldData: req.body,
				title: "Editar usuario", 
				css: "/css/editUser.css",
				user: user
			})
		};

		try {
		
			const userToUpdate = user;

		userToUpdate.user_name = req.body.name;
		userToUpdate.last_name = req.body.lastName;
		userToUpdate.email = req.body.email ;
		userToUpdate.age = req.body.age ;
		userToUpdate.city = req.body.city;
		userToUpdate.image = req.file.filename,
		userToUpdate.password = bcrypt.hashSync(req.body.password, 10);
		
		await userToUpdate.save();

		return res.redirect("/usuario/perfil/" + req.params.id);
		
	}
	catch(error) {return res.send(error)}
},

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
}
};

module.exports = controller;
