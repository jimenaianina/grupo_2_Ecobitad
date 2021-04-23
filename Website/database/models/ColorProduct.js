module.exports = (sequelize, dataType)=> {
    const ColorProduct = sequelize.define("ColorProduct", 
        {
            id:{
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            color_id: {
                allowNull: false,
                type: dataType.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataType.INTEGER
            }
        }, 
        {
            timestamps: false,
            tableName: 'colors_products' 
        }
        );
        ColorProduct.associate = function (models){
            ColorProduct.belongsTo(models.Product, {
                as:"product",
                foreignKey: "product_id"
        })
        ColorProduct.belongsTo(models.Color, {
                as:"Color",
                foreignKey: "color_id"
        })
    }

        return ColorProduct;
        };


            