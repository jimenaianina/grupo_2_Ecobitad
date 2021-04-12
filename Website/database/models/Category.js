
module.exports = (sequelize, dataType)=> {
    const Category = sequelize.define("Category", 
            {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            category_name:{
                allowNull: false,
                type: dataType.STRING
            }
        }, { 
            timestamps: false
        });

        Category.associate = function (models){
            Category.hasMany(models.Product, {
                as:"categories",
                foreignKey: "id"
            })
        }
        
        return Category;
};


        