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
<<<<<<< HEAD
			{association: "images"}]
=======
			"images"],
>>>>>>> dbdfd4d65bc134034765226a12a13b6965cf1803
			})
			
		return res.render("products/list", { products:products, title: "Productos", css: "/css/list.css" })
		}
		catch(error) {return res.send(error)}
	},

	detail: async (req,res)=> { 
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try { let product = 
		await db.Product.findByPk(req.params.id, {
			include: ["category", "sizes", "colors", "images"],
		})
		return res.render("products/detail", { product:product , title: product.name , css: "/css/detail.css", colores, categoria, talles})
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
		catch(error){return res.send(error)}
	},

	edit: async (req,res)=> {
		let categoria = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try { let product = 
			await db.Product.findByPk(req.params.id, {
				include: ["category", "sizes", "colors", "images"],
			})
		return res.render("products/editForm", { product:product , title: "Editar", css: "/css/forms.css", categoria, colores, talles})
	}
		catch(error){return res.send(error)}
	},

	

	save: async (req,res)=> {
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
			
		return res.redirect("/producto")

		}	
		catch(error) {return error}
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
	},

	destroy: async (req, res) => {

		try { let productToDelete =
			await db.ProductSize.destroy({
				where: {
					product_id: req.params.id
				}
			});

			await db.ColorProduct.destroy({
				where: {
					product_id: req.params.id
				}
			});

			await db.ImageProduct.destroy({
				where: {
					product_id: req.params.id
				}
			});
			
			await db.Product.destroy({
				where: {
					id: req.params.id
				}
			})
			res.redirect("/producto")}
			catch(error){return res.send(error)}
}
}

module.exports = controller;


  