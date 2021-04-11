module.exports = (sequelize, datatype)=> {
    const Product = sequelize.define("Product", 
        cols= {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            product_name:{
                allowNull: false,
                type: dataTypes.VARCHAR(50)
            },
            product_description: {
                allowNull: false,
                type: dataTypes.VARCHAR(1000)
            },
            category_id: {
                allowNull: false,
                type: dataTypes.INTEGER
            },
            color_id:{
                allowNull: true,
                type: dataTypes.INTEGER
            },
            size_id: {
                allowNull: true,
                type: dataTypes.INTEGER
            },
            price:{
                allowNull: false,
                type: dataTypes.INTEGER
            },
            stock:{
                allowNull: false,
                type: dataTypes.INTEGER
            },
            createdAt: {
                type: dataTypes.DATE
            },
            updatedAt: {
                type: dataTypes.DATE
            },

        });
        return Product;
        }

        Product.associate = function (models){
            Product.belongsTo(models.Category), {
                as:"category",
                foreignKey: "category_id"
            },
            Product.belongsToMany(models.Size, { through: 'ProductSize' }),
            Product.belongsToMany(models.Product, { through: 'ColorProduct' }),
            Product.belongsToMany(models.Image, { through: 'ImageProduct'})
        }