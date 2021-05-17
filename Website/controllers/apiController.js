const db = require('../database/models');

const controller = {

    allUsers: async (req, res) => {
		await db.User.findAll({attributes: {exclude: [ 'city','age', 'role_id', 'password']}})

		.then(users => {
			return res.json({
				count: users.length,
				users: users
			})
		})
	},

	oneUser: async (req,res) => {
		await db.User
		.findByPk(req.params.id, {attributes: {exclude: [ 'role_id', 'password']}})
		.then(oneUser => {
			return res.json({
				id: oneUser.id,
				name: oneUser.user_name,
				lastName: oneUser.last_name,
				age: oneUser.age,
				email: oneUser.email,
				city: oneUser.city,
				image: oneUser.image
			})})
	},
	
    allProducts: async (req, res) => { 
		await db.Product
		.findAll({include: ["category", "colors"], attributes: {exclude: ['price', 'stock', 'category_id']}})

		let productsBaño = await db.Product.findAll({ where: { category_id: 1}})
		let productsOnTheGo = await db.Product.findAll({ where: { category_id: 2}})
		let productsCocina = await db.Product.findAll({ where: { category_id: 3}})

		.then(products => {
			return res.json({
				count: products.length,
				countByCategory: {
					Baño: productsBaño.length,
					OnTheGo: productsOnTheGo.length,
					Cocina: productsCocina.length
				},
				products: products, 
				detail: "http://localhost:3030/producto/api/products/ACÁ IRÍA CADA ID" 
			})})
		},
	
		oneProduct: async (req,res) => {
			await db.Product
			.findByPk(req.params.id, {include: ["category", "sizes", "colors", "images"]})
			.then(oneProduct => {
				return res.json({
					oneProduct
				})})
		}
	
}

module.exports = controller;
