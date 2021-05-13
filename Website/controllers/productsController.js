const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const controller = {

	index: async (req, res) => {
		let categorias = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try {
			let products = await db.Product.findAll({include: ["category", "sizes", "colors", "images"]});
			res.render("products/list", { products:products, title: "Productos", css: "/css/list.css", categorias, colores, talles})}
		catch(error){return res.send(error)}
	},

	detail: async (req,res)=> { 
		let categorias = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try { let product = 
		await db.Product.findByPk(req.params.id, {
			include: ["category", "sizes", "colors", "images"],
		})
		return res.render("products/detail", { product:product , title: product.product_name , css: "/css/detail.css", colores, categorias, talles})
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
		let categorias = await db.Category.findAll();
		let talles = await db.Size.findAll();
		let colores = await db.Color.findAll();
		try { let product = 
			await db.Product.findByPk(req.params.id, {
				include: ["category", "sizes", "colors", "images"],
			})
		return res.render("products/editForm", { product:product , title: "Editar", css: "/css/forms.css", categorias, colores, talles})
	}
		catch(error){return res.send(error)}
	},

	/*guardarImagen: async (req)=> {
		let imagesToSave = [];
		let imagesToSaveId = [];
		let imagenes = req.files.map( 
			async (image) => { 
		   
		   const createdImage = await db.Image.create({
				   image_path: image.path
			   })
		   
			   console.log(createdImage.dataValues.id);
		   imagesToSaveId.push(createdImage.dataValues.id);
	   
		   return createdImage});

		  
           return imagesToSaveId
		},*/

	save: async (req,res)=> {

		/*let errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.render('products/createForm', {
				errors: errors.mapped(),
				oldData: req.body,
				title: "Crear producto", 
				css: "/css/forms.css"
			})
		};*/

		 
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

			let imagesToSave = [];
			let imagesToSaveId = [];
		
			for(let image of req.files) { 
		 
			const  createdImage = await db.Image.create({
				image_path: image.filename
			})
			imagesToSaveId.push(createdImage.dataValues.id);
			}
			for(let imagen of imagesToSaveId) {
				const imagenToAddOnSave = await db.Image.findByPk(imagen);	 
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
		await productToCreate.addImages(imagesToSave);

		return res.redirect("/producto")

		}	
		catch(error) {return error}
		},		

	update: async (req, res) => {

		let errors = validationResult(req);

		/*if (!errors.isEmpty()) {
			return res.render('users/register', {
				errors: errors.mapped(),
				oldData: req.body,
				title: "Crear producto", 
				css: "/css/forms.css"
			})
		};*/

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
			
			let imagesToSave = [];
			let imagesToSaveId = [];
		
 
		for(let image of req.files) { 
			const createdImage = await db.Image.create({
				image_path: image.filename
				})
			imagesToSaveId.push(createdImage.dataValues.id);
			}
		for(let imagen of imagesToSaveId) {
			const imagenToAddOnSave = await db.Image.findByPk(imagen);	 
			imagesToSave.push(imagenToAddOnSave)		
			}		 
		
		try {
			const productToUpdate = await db.Product.findByPk(req.params.id, {
				include: ["category", "sizes", "colors", "images"],
			});

		productToUpdate.product_name = req.body.name;
		productToUpdate.product_description = req.body.description;
		productToUpdate.category_id = req.body.category ;
		productToUpdate.price = req.body.price ;
		productToUpdate.stock = req.body.stock ;
		
		await productToUpdate.save();

		await productToUpdate.setSizes(tallesToSave);
		await productToUpdate.setColors(coloresToSave);
		await productToUpdate.setImages(imagesToSave);
			
		return res.redirect("/producto/detalle/" + req.params.id);
		
	}
	catch(error) {return res.send(error)}
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


  