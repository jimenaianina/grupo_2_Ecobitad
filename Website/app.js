const express= require("express");
const app= express();
const path = require("path");
const methodOverride =  require('method-override');
const multer = require('multer');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');



app.listen(3030,()=> console.log("inicio del servidor"));


app.use(express.static(path.resolve(__dirname,"public")));
app.use(express.static(path.resolve(__dirname,"upload")));
app.use(session({ 
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies())
app.use(userLoggedMiddleware);
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/views'));


const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products'); 
const usersRouter = require('./routes/users');

app.use('/', mainRouter);
app.use('/producto', productsRouter);
app.use('/usuario', usersRouter)

