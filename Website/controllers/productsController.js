const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = {

	index: async (req, res) => {
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try {let products = 
		await db.Product.findAll({include: [
		{association: "images"}],
			raw: true,
			nest: true
			})
		return res.render("products/list", { products:products, title: "Productos", css: "/css/list.css", colores, categoria, talles })
		}
		catch(error) {return res.send(error)}
	},

	detail: async (req,res)=> { 
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try { let product = 
		await db.Product.findByPk(req.params.id, {
			include: [
				{association: "category"}, 
				{association: "sizes"}, 
				{association: "colors"}, 
				{association: "images"}],
				raw: true,
				nest: true
		})
		return res.render("products/detail", { product:product , title: product.name , css: "/css/detail.css",colores, categoria, talles})
	}
	catch(error) {return res.send(error)}
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
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try {
			let producto = await db.Product.findByPk(req.params.id, {
				include: [{association: "category"}, {association: "color"}, {association: "size"},{association: "image"}]
			});	
		return res.render("products/editForm", { product: product, category: category, size: size, color: color}, { title: "Editar", css: "/css/forms.css" })
	}
		catch(error){return error}
	},

	

	save: async (req,res)=> {
		//return res.send(Array.from(req.body.sizes).map(size=> new Object ({size_id: parseInt(size)})));
		let talles = Array.from(req.body.sizes).map(size=> new Object ({size_id: parseInt(size)}));
		let tallesToSave = [];
		for(let talle of talles) {
			const talleToAddOnSave = await db.Size.findByPk(talle.size_id);
			tallesToSave.push(talleToAddOnSave)
			}
		
		let colores = Array.from(req.body.colors).map(color=> new Object ({color_id: parseInt(color)}));
		let coloresToSave = [];
		for(let color of colores) {
			const colorToAddOnSave = await db.Color.findByPk(color.color_id);
			coloresToSave.push(colorToAddOnSave)
			}
		
		let imagenes = Array.from(req.files.images).map(image => new Object ({image_id: parseInt(image)}));
		let imagesToSave = [];
		for(let imagen of imagenes) {
			const imagenToAddOnSave = await db.Image.findByPk(imagen.image_id);
			imagesToSave.push(imagenToAddOnSave)
			}

		try {
			const productToCreate = await db.Product.create({
			product_name: req.body.name ,
			product_description: req.body.description,		
			category_id: req.body.category,						
			price: req.body.price, 
			stock: req.body.stock,
			})
			
			
			await productToCreate.addSizes(tallesToSave);
			await productToCreate.addColors(coloresToSave);

			return res.send(productToCreate)
			

	res.redirect("/producto")
		}	
		catch(error) {return error}
		},

	//	await db.Product.create({
	//		product_name: req.body.name, 
	//		product_description: req.body.description,
	//		category_id: req.body.category,
	//		price: req.body.price,
	//		stock: req.body.stock,
	//		size: req.body.size
	//		},
	//	{include:[{association: db.ProductSize}]})
		
		
	
		/*let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../database/products.json")));
		req.body.id = products.length > 0 ? products[products.length-1].id+1 : 1;
		req.body.image = [];
		req.files.forEach(file => {
			req.body.image.push(file.filename)
		});
		products.push(req.body);
		fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products, null, 2));*/
		

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

		try { let productToDelete =
			await db.Product.destroy({
				where: {
					id: req.params.id
				}
			})
			res.redirect("/producto")}
			catch(error){return error}
}
}

module.exports = controller;