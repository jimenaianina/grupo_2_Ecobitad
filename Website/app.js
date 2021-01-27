//guardar express
const express= require("express");
const app= express();
const path = require("path");


//levanto el servidor
app.listen(3030,()=> console.log("inicio del servidor"));

//configuro la carpeta public

app.use(express.static(path.resolve(__dirname,"public")));
app.set('view engine', 'ejs');


//configuro las rutas para las vistas
app.get("/",(req,res)=> res.render("home", { title: "Home" }));
app.get("/producto",(req,res)=> res.render("./products/product", { title: "Producto" }));
app.get("/login",(req,res)=> res.render("./users/login", { title: "Login" }));
app.get("/registro",(req,res)=> res.render("./users/register", { title: "Registro" }));
app.get("/carrito",(req,res)=> res.render("./products/cart", { title: "Carrito" }));