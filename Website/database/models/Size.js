module.exports = (sequelize, datatype)=> {
    const Size  =sequelize.define("Size", 
        cols= {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            size_name:{
                allowNull: false,
                type: dataTypes.VARCHAR(25)
            }
        });
        return Size;
        }

Size.associate = function (models){
    Size.belongsToMany(models.Product, { through: 'ProductSize' })
}