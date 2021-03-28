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
	},

	save: (req,res)=> {
		let users = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/users.json")));
		req.body.id = users.length > 0 ? users[users.length-1].id+1 : 1;
		req.body.images = [];
		req.files.forEach(file => {
			req.body.images.push(file.filename)
		});
		users.push(req.body);
		fs.writeFileSync(path.resolve(__dirname,"../database/users.json"), JSON.stringify(users, null, 2));
		return res.redirect("/home")
		},
	},


};

module.exports = controller;

		