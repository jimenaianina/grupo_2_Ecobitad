const controller = {
	index: (req,res)=> res.render("home", { title: "Home", css: "/css/home.css" })
}

module.exports = controller;

