
module.exports = (sequelize, datatype)=> {
    const Cart  =sequelize.define("Cart", 
        cols= {
            cart_id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            user_id:{
                allowNull: false,
                type: dataTypes.INTEGER
            },
            cart_total: {
                allowNull: false,
                type: dataTypes.INTEGER
            },
            createdAt: {
                type: dataTypes.DATE
            },
            updatedAt: {
                type: dataTypes.DATE
            },

        });
        return Cart;
        }
            
        Cart.associate = function (models){
            Cart.belongsTo(models.Users), {
                as:"user",
                foreignKey: "user_id"
            }
        }
            