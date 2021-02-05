const controller = {

	detail: (req,res)=> res.render("products/detail", { title: "Producto" }),

	cart: (req,res)=> res.render("products/cart", { title: "Carrito" }),

	create: (req,res)=> res.render("products/createForm", { title: "Crear" }),

	save: (req,res)=> res.send(req.body)
};

module.exports = controller;