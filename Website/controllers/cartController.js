const db = require('../database/models');

const controller = {

    cart: async (req,res) => {
    
        //este controller rompe todo, pero lo ideal sería que traiga el cartUser y el cartProducts del cartUser 
        //y pasárselos a la vista para que muestre los productos en el cart
        
        let userLogged = req.session.userLogged
        
        if(userLogged) {
    /*
        let cart = await db.Cart.findOne({
            where: { 
                user_id: userLogged.id
            }
        });
    
        let cartProducts = await db.CartProduct.findOne({ 
            where: {
                cart_id: cart.id
            }
        })
    */
        return res.render("products/cart2", { title: "Carrito", css: "/css/cart2.css"})
    } else { return res.redirect("/usuario/acceder")}
    },
    
    addCart: async (req,res)=> {
        let categories = await db.Category.findAll();
        let sizes = await db.Size.findAll();
        let colors = await db.Color.findAll();
    
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
    
        // lo ideal sería sumar todos los unit_price de los productsOnCart  y actualizar el cart_total de cartUser
    
        let productsOnCart = await db.CartProduct.findAll({ 
            where: { 
                cart_id : cartUser.id
             }
            })
        return res.send(productsOnCart)
        let cartTotal = 0;
        /*
        cartUser.cart_total = cartTotal
        await cartUser.save();*/
    
        return res.render("products/cart2", { title: "Carrito", css: "/css/cart2.css", colors, categories, sizes })
    } else { return res.redirect("/usuario/acceder")}
    } catch(error) {return res.send(error)}
    },
    
    destroyCart: async (req, res) => {
            try { 
                /*let cartsToDelete = await db.Cart.findAll({
                    where: {
                        user_id: 12
                    }
                })
    
                await db.CartProduct.destroy({
                    where: {
                        cart_id: cartsToDelete.id
                    }
                });
    
                await cartsToDelete.destroy({
                    where: {
                        user_id: 12
                    }
                });*/
            
            return res.redirect('/');
    
        } catch(error) {return res.send(error)}
        }
}

module.exports = controller;