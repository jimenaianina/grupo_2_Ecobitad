const fs = require('fs');
const path = require('path');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const validationResult = require('express-validator');
const session = require('express-session');


const controller = {

	profile: (req,res)=> {		
		return res.render("users/profile", { user: req.session.userLogged }, { title: "Perfil", css: "/css/profile.css"})
	},
	
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
		return res.render('users/login', {
			errors: {
				email: {
					msg: 'Las credenciales ingresadas son inválidas'
				}
			}
		});		
	}
	},

	register: (req,res)=> {
		res.render("users/register", { title: "Registro", css: "/css/register.css"})
	},

	processRegister: (req,res) => {
		const resultValidation = validationResult(req, res);
		if (resultValidation.errors.length > 0) {
			return res.render('users/register', { 
				errors: resultValidation.mapped(), 
				oldData: req.body
			})
		} 

		let userinDB = User.findByField('email', req.body.email);

		if(userinDB) {
			return res.render('users/register', { 
				errors: {
					email: { 
						msg: 'Este email ya se encuentra registrado'
					}
				},
				oldData: req.body
			})
		};

		let userToCreate = {
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file.filename
		}

		let userCreated = user.create(userToCreate);

		return res.redirect('/usuario/acceder');
	},

	destroy: (req, res) => {
		let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/users.json")));
		let userSelected = users.find(user => user.id == req.params.id);
		users = users.filter(user => user.id != userSelected.id);
		fs.writeFileSync(path.resolve(__dirname,"../database/users.json"), JSON.stringify(users, null, 2));
		return res.redirect("/")
}

};

module.exports = controller;

		