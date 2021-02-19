const controller = {

	detail: (req,res)=> res.render("products/detail", { title: "Producto", css: "/css/detail.css" }),

	cart: (req,res)=> res.render("products/cart", { title: "Carrito", css: "/css/cart.css" }),

	create: (req,res)=> res.render("products/createForm", { title: "Crear", css: "/css/forms.css"}),

	edit: (req,res)=> res.render("products/editForm", { title: "Editar", css: "/css/forms.css" }),

	save: (req,res)=> res.send(req.body),

	update: (req, res) => res.send(req.body)
};

module.exports = controller;