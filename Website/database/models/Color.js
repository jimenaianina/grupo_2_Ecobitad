module.exports = (sequelize, datatype)=> {
    const Color  =sequelize.define("Color", 
        cols= {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            color_name:{
                allowNull: false,
                type: dataTypes.VARCHAR(25)
            }
        });
        return Color;
}

Color.associate = function (models){
    Product.belongsToMany(models.Product, { through: 'ProductColor' })
}