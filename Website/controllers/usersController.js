const controller = {
	login: (req,res)=> {res.render("login", { title: "Login" })},
	register: (req,res)=> {res.render("register", { title: "Registro" })}
};

module.exports = controller;