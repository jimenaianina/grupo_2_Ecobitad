const controller = {
	login: (req,res)=> {res.render("users/login", { title: "Login", css: "/css/login.css" })},
	register: (req,res)=> {res.render("users/register", { title: "Registro", css: "/css/register.css"})}
};

module.exports = controller;