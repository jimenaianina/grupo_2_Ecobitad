module.exports = (sequelize, datatype)=> {
    const ProductImage  =sequelize.define("ProductImage", 
        cols= {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            image_path:{
                allowNull: false,
                type: dataTypes.VARCHAR(300)
            },
        },
            {
            tableName: products_images
            });
        return ProductImage;
        }
            