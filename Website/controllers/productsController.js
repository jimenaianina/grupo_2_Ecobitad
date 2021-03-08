const fs = require('fs');
const path = require('path');

const controller = {

	index: (req, res) => {
		let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")))
		let categoria = products.filter(product => product.category == req.params.category);
		let talles = products.filter(product => product.sizes == req.params.sizes);
		let colores = products.filter(product => product.colors == req.params.colors);
		return res.render("products/list", { title: "Productos", css: "/css/list.css", products, colores, categoria, talles })
	},

	detail: (req,res)=> { 
		let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")))
		let product = products.find(product => product.id == req.params.id)
		return res.render("products/detail", { title: product.name , css: "/css/detail.css", product })
	},

	cart: (req,res)=> {
		return res.render("products/cart", { title: "Carrito", css: "/css/cart.css" })
	},

	create: (req,res)=> {
		let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/categories.json")));
		let colores = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/colors.json")));
		let talles = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/sizes.json")));
		return res.render("products/createForm", { title: "Crear", css: "/css/forms.css", categorias, colores, talles})
	},

	edit: (req,res)=> {
		let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")))
		let product = products.find(product => product.id == req.params.id)
		let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/categories.json")));
		let colores = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/colors.json")));
		let talles = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/sizes.json")));
		return res.render("products/editForm", { title: "Editar", css: "/css/forms.css", product })
	},

	save: (req,res)=> {
		let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));
		req.body.id = products.length > 0 ? products[products.length-1].id+1 : 1;
		req.body.images = [];
		req.files.forEach(file => {
			req.body.images.push(file.filename)
		});
		products.push(req.body);
		fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products, null, 2));
		return res.redirect("/producto")
		},

	update: (req, res) => {
		let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));
		let productSelected = products.find(product => product.id == req.params.id);
		productSelected.images.forEach( image => fs.unlinkSync(path.resolve(__dirname,"../upload/products/"+image)))
		req.body.images = [];
		req.files.forEach(file => {
			req.body.images.push(file.filename)
		});
		products.map(product => { 
			if (product.id == productSelected.id) {
				product.name = req.body.name;
				product.description = req.body.description;
				product.category = req.body.category;
				product.stock = req.body.stock;
				product.colors = req.body.colors;
				product.sizes = req.body.sizes;
				product.price = req.body.price;
				product.images = req.body.images;
			} return product
		})
		fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products, null, 2));
		return res.redirect("/producto")
	},

	destroy: (req, res) => {
			let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));
			let productSelected = products.find(product => product.id == req.params.id);
			products = products.filter(product => product.id != productSelected.id);
			fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products, null, 2));
			return res.redirect("/producto")
	}
};

module.exports = controller;