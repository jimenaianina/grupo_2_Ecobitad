
module.exports = (sequelize, datatype)=> {
    const Category = sequelize.define("Category", 
        cols= {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            category_name:{
                allowNull: false,
                type: dataTypes.VARCHAR(50)
            }
        });
        return Category;
};

Category.associate = function (models){
    Category.hasMany(models.Product, {
        as:"categories",
        foreignKey: "id"
    })
}
        