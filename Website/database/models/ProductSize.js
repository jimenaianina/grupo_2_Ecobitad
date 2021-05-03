module.exports = (sequelize, dataType)=> {
    const ProductSize = sequelize.define("ProductSize", 
        {
            id:{
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            size_id: {
                allowNull: false,
                type: dataType.INTEGER
            },
            product_id:{
                allowNull: false,
                type: dataType.INTEGER
            }
        }, 
        {
            timestamps: false,
            tableName: 'products_sizes' 
        }
        );

        ProductSize.associate = function (models){
            ProductSize.belongsTo(models.Product, {
                as:"product",
                foreignKey: "product_id", 
                timestamps: false
        })
        ProductSize.belongsTo(models.Size, {
                as:"size",
                foreignKey: "size_id", 
                timestamps: false
        })
    }
        return ProductSize;
        
        }

       