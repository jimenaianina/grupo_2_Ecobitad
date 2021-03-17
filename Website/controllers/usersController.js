const fs = require('fs');
const path = require('path');

const controller = {
	profile: (req,res)=> {		
		let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/users.json")))
		let user = users.find(user => user.id == req.params.id)
		res.render("users/profile", { title: "Perfil", css: "/css/profile.css", user })
	},
	
	login: (req,res)=> {
		res.render("users/login", { title: "Login", css: "/css/login.css" })
	},
	
	register: (req,res)=> {
		res.render("users/register", { title: "Registro", css: "/css/register.css"})
	}

};

module.exports = controller;

		