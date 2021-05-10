const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const session = require('express-session');
const db = require('../database/models');


const controller = {

	login: (req,res)=> {
		res.render("users/login", { title: "Login", css: "/css/login.css" })
	},

	processLogin: (req,res)=> {
		
		let userToLogin = db.User.findOne({
			where: { 
				email: req.body.email
			}
		})
		if (userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				return res.redirect('/')
			} 

		if(req.body.rememberUser) {
			res.cookies('userCookie', req.body.email, { maxAge: (1000 * 60) * 2})
		}
		return res.render('users/login', {
			errors: {
				email: {
					msg: 'Este mail no se halla registrado en nuestra base de datos'
				}
			},
				title: "Login", 
				css: "/css/login.css"
			
		});		
	}
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

	processRegister: (req,res) => {
		let resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body,
				title: "Registro", 
				css: "/css/register.css"
			})
		};
		
		let userToCreate = db.User.create({
			name: req.body.name,
			lastName: req.body.lastName,
			email: req.body.email,
			age: req.body.age,
			city: req.body.city,
			image: req.file.filename, 
			role: 1,
			password: bcrypt.hashSync(req.body.password, 10)
		});

			return res.redirect('/usuario/acceder')
	 
	},

	destroy: async (req, res) => {

		let userToDelete = req.session.userLogged.id;
	
		await db.User.destroy({
			where: { 
				id: userToDelete
			}});

		req.session.destroy();
		return res.redirect('/');
	}
};

module.exports = controller;