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
app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname,"views","home.html")));
app.get("/producto",(req,res)=> res.sendFile(path.resolve(__dirname,"views","product.html")));
app.get("/login",(req,res)=> res.sendFile(path.resolve(__dirname,"views","login.html")));
app.get("/registro",(req,res)=> res.sendFile(path.resolve(__dirname,"views","register.html")));
app.get("/carrito",(req,res)=> res.sendFile(path.resolve(__dirname,"views","cart.html")));