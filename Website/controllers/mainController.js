const fs = require('fs');
const path = require('path');

const controller = {
	index: (req,res)=> {
	let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));	
	return res.render("home", { title: "Home", css: "/css/home.css", products })
	},
	usInfo: (req,res)=> {
		return res.render("usInfo", { title: "Nosotros", css: "/css/us.css" })
		}
}

module.exports = controller;

