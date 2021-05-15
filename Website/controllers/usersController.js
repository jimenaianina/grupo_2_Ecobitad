const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const session = require('express-session');
const db = require('../database/models');


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
			if(req.body.rememberUser) {
				res.cookies('userEmail', req.body.email, { maxAge: 60000 * 2})
				}
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				return res.redirect('/')
			}}
		
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
}
};

module.exports = controller;