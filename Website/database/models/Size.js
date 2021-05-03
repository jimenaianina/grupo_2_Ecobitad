module.exports = (sequelize, dataType)=> {
    const Size  =sequelize.define("Size", 
        {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            size_name:{
                allowNull: false,
                type: dataType.STRING
            }
        }, 
        {
            timestamps: false
        });
        Size.associate = function (models){
            Size.belongsToMany(models.Product, { through: 'products_sizes', foreignKey: "size_id", otherKey: "product_id", as: "products", timestamps: false })
        }
        
        return Size;
        }

