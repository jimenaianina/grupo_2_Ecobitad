const fs = require('fs');
const path = require('path');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const {check} = require('express-validator');
const session = require('express-session');

const controller = {

	profile: (req,res)=> {		
		let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/users.json")));
		let user = users.find(user => user.id == req.params.id)
		res.render("users/profile", { title: "Perfil", css: "/css/profile.css", user })
	},
	
	login: (req,res)=> {
		res.render("users/login", { title: "Login", css: "/css/login.css" })
	},


	processLogin: (req,res)=> {
		let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/users.json")));
		let user = users.find(user => user.email == req.body.email);
		return console.log(user)
	},

	register: (req,res)=> {
		res.render("users/register", { title: "Registro", css: "/css/register.css"})
	},

	create: function(req,res,next) {
		let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/users.json")));
		req.body.id = users.length > 0 ? users[users.length-1].id+1 : 1;
		//validar cada cosa que se sube
		req.body.images = [];
		req.files.forEach(file => {
			req.body.images.push(file.filename)
		});
		req.body.password = bcrypt.hashSync(req.body.password, 10);
		users.push(req.body);
		fs.writeFileSync(path.resolve(__dirname,"../database/users.json"), JSON.stringify(users, null, 2));
		return res.redirect("/")
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

		