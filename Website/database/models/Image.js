module.exports = (sequelize, dataType)=> {
    const Image = sequelize.define("Image", 
        {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            image_path:{
                allowNull: false,
                type: dataType.STRING
            },
        }, { 
            timestamps: false
        })
        Image.associate = function (models){
            Image.belongsToMany(models.Product, { through: 'images_products', foreignKey: "image_id", otherKey: "product_id", as: "products", timestamps: false})
        }
        return Image;
        
        }
            