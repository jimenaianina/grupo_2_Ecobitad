module.exports = (sequelize, dataType)=> {
    const Cart = sequelize.define("Cart", 
            {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            user_id:{
                allowNull: false,
                type: dataType.INTEGER
            },
            cart_total: {
                allowNull: false,
                type: dataType.INTEGER
            }
        }, { 
            timestamps: false
        });

        Cart.associate = function (models){
            Cart.belongsTo(models.User), {
                as:"user",
                foreignKey: "user_id"
            }
        }
        
        return Cart;
        }
            
        
            