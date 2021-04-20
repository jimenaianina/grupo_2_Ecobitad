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
            Image.belongsToMany(models.Product, { through: 'images_products', foreignKey: "image_id", as: "products" })
        }
        return Image;
        
        }
            