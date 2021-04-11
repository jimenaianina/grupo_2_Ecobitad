module.exports = (sequelize, datatype)=> {
    const CartProduct  =sequelize.define("CartProduct", 
        cols= {
            id:{
                allowNull: false,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            cart_id: {
                allowNull: false,
                type: dataTypes.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataTypes.INTEGER
            },
            quantity:{
                allowNull: false,
                type: dataTypes.INTEGER
            },
            unit_price:{
                allowNull: false,
                type: dataTypes.INTEGER
            },
            createdAt: {
                type: dataTypes.DATE
            },
            updatedAt: {
                type: dataTypes.DATE
            },
        }, 
        {
           tableName: 'cart_products' 
        }
        );
        return CartProduct;
        }
            