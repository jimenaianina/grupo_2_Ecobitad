const db = require('../database/models');
const { forEach } = require('../middlewares/validateRegisterMiddleware');

const controller = {

    cart: async (req,res) => {
        
        let userLogged = req.session.userLogged
        
        if(userLogged) {
    
        let cart = await db.Cart.findOne({
            where: { 
                user_id: userLogged.id
            },
            attributes: {exclude: ['UserId']}
        });
    
        let cartProducts = await db.CartProduct.findAll({ 
            where: {
                cart_id: cart.id
            }
        });

        let products = [];

        for (const product of cartProducts) {
            let productToAdd = await db.Product.findByPk(product.product_id, { include: ["category", "sizes", "colors", "images"]})
            products.push(productToAdd)
        }
    
        return res.render("products/cart2", { title: "Carrito", css: "/css/cart2.css", cart: cart, products: products})
    } else { return res.redirect("/usuario/acceder")}
    },
    
    addCart: async (req,res)=> {
    
        let productToAdd = await db.Product.findByPk(req.params.id, {
            include: ["category", "sizes", "colors", "images"],
        });
    
        let userLogged = req.session.userLogged;
    
        try { 
    
        if (userLogged) {
        const cartUser = await db.Cart.findOne({
                where: {
                    user_id: userLogged.id
                },
                attributes: {exclude: ['UserId']}
            });

        const cartProductToCreate = await db.CartProduct.create({
            cart_id: cartUser.id,
            product_id: productToAdd.id,
            quantity: 1,
            unit_price: productToAdd.price,
        })
    
        let arrayOfPrices = [];

        let productsOnCart = await db.CartProduct.findAll({ 
            where: { 
                cart_id : cartUser.id
             }
            })

        productsOnCart.forEach( product => {
            arrayOfPrices.push(product.unit_price)})
        
        let cartTotal = arrayOfPrices.reduce(function(a, b){return a + b})
        
        cartUser.cart_total = cartTotal
        await cartUser.save();
    
        return res.redirect('/carrito')
    } else { return res.redirect("/usuario/acceder")}
    } catch(error) {return res.send(error)}
    },
    
    destroyCart: async (req, res) => {
            try { 

                let userLogged = req.session.userLogged;

                let cartToDelete = await db.Cart.findOne({
                    where: {
                        user_id: userLogged.id
                    },
                    attributes: {exclude: ['UserId']}
                })
    
                await db.CartProduct.destroy({
                    where: {
                        cart_id: cartToDelete.id
                    }
                });

                cartToDelete.cart_total = 0;
                await cartToDelete.save();

            return res.redirect('/carrito');
    
        } catch(error) {return res.send(error)}
        }
}

module.exports = controller;
