module.exports = (sequelize, dataType)=> {
    const ImageProduct = sequelize.define("ImageProduct", 
        {
            id:{
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            image_id: {
                allowNull: false,
                type: dataType.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataType.INTEGER
            },
            createdAt: {
                type: dataType.DATE
            },
            updatedAt: {
                type: dataType.DATE
            },
        }, 
        {
            timestamps: false,
           tableName: 'images_products' 
        }
        );
        return ImageProduct;
        }