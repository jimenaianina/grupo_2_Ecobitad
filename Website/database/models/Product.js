module.exports = (sequelize, dataType)=> {
    const Product = sequelize.define("Product", 
        {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            product_name:{
                allowNull: false,
                type: dataType.STRING
            },
            product_description: {
                allowNull: false,
                type: dataType.STRING
            },
            category_id: {
                allowNull: false,
                type: dataType.INTEGER
            },
            price:{
                allowNull: false,
                type: dataType.INTEGER
            },
            stock:{
                allowNull: false,
                type: dataType.INTEGER
            },
        }, { 
            timestamps: false
        });

        Product.associate = function (models){
            Product.belongsTo(models.Category, {
                as:"category",
                foreignKey: "category_id"
            })
            Product.belongsToMany(models.Size, { through: 'products_sizes', foreignKey: "product_id" })
            Product.belongsToMany(models.Color, { through: 'colors_products', foreignKey: "product_id" })
            Product.belongsToMany(models.Image, { through: 'images_products', foreignKey: "product_id"})
        }

        return Product;
        
        }

       