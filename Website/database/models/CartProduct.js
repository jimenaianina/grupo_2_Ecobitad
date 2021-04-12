module.exports = (sequelize, dataType)=> {
    const CartProduct  =sequelize.define("CartProduct", 
        {
            id:{
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            cart_id: {
                allowNull: false,
                type: dataType.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataType.INTEGER
            },
            quantity:{
                allowNull: false,
                type: dataType.INTEGER
            },
            unit_price:{
                allowNull: false,
                type: dataType.INTEGER
            }
        }, 
        {
            timestamps: false,
            tableName: 'cart_products' 
        }
        );
        return CartProduct;
        }
            