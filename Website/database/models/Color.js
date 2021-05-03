module.exports = (sequelize, dataType)=> {
    const Color = sequelize.define("Color", 
        {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            color_name:{
                allowNull: false,
                type: dataType.STRING
            }
        }, {
            timestamps: false
        });

        Color.associate = function (models){
            Color.belongsToMany(models.Product, { through: 'colors_products', foreignKey: "color_id", otherKey: "product_id", as: "products", timestamps: false })
        }
        
        return Color;
}

