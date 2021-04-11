module.exports = (sequelize, datatype)=> {
    const ImageProduct = sequelize.define("ImageProduct", 
        cols= {
            id:{
                allowNull: false,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            image_id: {
                allowNull: false,
                type: dataTypes.INTEGER
            },
            product_id:{
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
           tableName: 'image_products' 
        }
        );
        return ImageProduct;
        }