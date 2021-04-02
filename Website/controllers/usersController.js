const fs = require('fs');
const path = require('path');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const session = require('express-session');


const controller = {

	login: (req,res)=> {
		res.render("users/login", { title: "Login", css: "/css/login.css" })
	},

	processLogin: (req,res)=> {
		
		let userToLogin = User.findByField('email', req.body.email);
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

		let userinDB = User.findByField('email', req.body.email);

		if(userinDB) {
			return res.render('users/register', { 
				errors: {
					email: { 
						msg: 'Este email ya se encuentra registrado'
					}
				},
				oldData: req.body,
				title: "Registro", 
				css: "/css/register.css"
			})
		};

		let userToCreate = {
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file.filename
		};

		let userCreated = User.create(userToCreate);

			return res.redirect('/usuario/acceder')
	 
	},

	destroy: (req, res) => {

		let userToDelete = req.session.userLogged.id;
		User.delete(userToDelete);
		req.session.destroy();

		return res.redirect('/');
	}

};

module.exports = controller;