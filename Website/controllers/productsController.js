const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = {

	index: async (req, res) => {
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try {let products = 
		await db.Product.findAll({include:["size","image","color","category"]})
			
	return res.render("products/list", { products:products, title: "Productos", css: "/css/list.css", colores, categoria, talles })
		}
		catch(error) {return error}
	},

	detail: async (req,res)=> { 
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try { let product = 
		await db.Product.findByPk(req.params.id, {
			include: [{association: "category"}, {association: "color"}, {association: "size"},{association: "image"}]
		})
		return res.render("products/detail", { product:product , title: product.name , css: "/css/detail.css",colores, categoria, talles})
	}
	catch(error) {return error}
	},

	cart: (req,res)=> {
		return res.render("products/cart", { title: "Carrito", css: "/css/cart.css" })
	},

	create: async (req,res)=> {
		let categorias = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try {res.render("products/createForm", { title: "Crear", css: "/css/forms.css", categorias, colores, talles})}
		catch(error){return error}
	},

	edit: async (req,res)=> {
		let producto = await db.Product.findByPk(req.params.id);

		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();

		Promise.all([producto, categoria, talles, colores])
		.then (function([product, category, size, color]){
			return res.render("products/editForm", { product: product, category: category, size: size, color: color}, { title: "Editar", css: "/css/forms.css" })
		})
	},

	save: async (req,res)=> {

		await db.Product.create({
			product_name: req.body.name, 
			product_description: req.body.description,
			category_id: req.body.category,
			color: req.body.color,
			price: req.body.price,
			stock: req.body.stock,
			size: req.body.size,
			product_images: req.body.images
		});
		/*let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));
		req.body.id = products.length > 0 ? products[products.length-1].id+1 : 1;
		req.body.image = [];
		req.files.forEach(file => {
			req.body.image.push(file.filename)
		});
		products.push(req.body);
		fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products, null, 2));*/
		res.redirect("/producto")
		},

	update: async (req, res) => {

		await db.Product.update({
			product_name: req.body.name, 
			product_description: req.body.description,
			category_id: req.body.category,
			color: req.body.color,
			price: req.body.price,
			stock: req.body.stock,
			size: req.body.size,
			product_images: req.body.images
		}, {
			where: {
				product_id: req.params.id
			}
		});

		res.redirect("/producto/detalle/" + req.params.id)

		/*let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));
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
		fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products, null, 2));*/
	},

	destroy: async (req, res) => {
			await db.Product.destroy({
				where: {
					product_id: req.params.id
				}
			})
			res.redirect("/producto")
	}
}

module.exports = controller;