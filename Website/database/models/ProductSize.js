module.exports = (sequelize, datatype)=> {
    const ProductSize = sequelize.define("ProductSize", 
        cols= {
            id:{
                allowNull: false,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            size_id: {
                allowNull: false,
                type: dataTypes.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataTypes.INTEGER
            }
        }, 
        {
           tableName: 'products_sizes' 
        }
        );
        return ProductSize;
        }