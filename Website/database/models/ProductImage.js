
module.exports = (sequelize, datatype)=> {
    const ProductImage  =sequelize.define("ProductImage", 
        cols= {
            image_id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            image_path:{
                allowNull: false,
                type: dataTypes.VARCHAR(300)
            },
            product_id:{
            allowNull: false,
            type: dataTypes.INTEGER
            },
        },
            {
            tableName: products_images
            });
        return ProductImage;
        }
            