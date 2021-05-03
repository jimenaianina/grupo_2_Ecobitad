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
                foreignKey: "product_id",
                timestamps: false
        })
        ColorProduct.belongsTo(models.Color, {
                as:"color",
                foreignKey: "color_id", 
                timestamps: false
        })
    }

        return ColorProduct;
        };


            