module.exports = (sequelize, datatype)=> {
    const ColorProduct  =sequelize.define("ColorProduct", 
        cols= {
            id:{
                allowNull: false,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            color_id: {
                allowNull: false,
                type: dataTypes.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataTypes.INTEGER
            }
        }, 
        {
           tableName: 'color_products' 
        }
        );
        return ColorProduct;
        };


            