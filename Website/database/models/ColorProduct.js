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
        return ColorProduct;
        };


            