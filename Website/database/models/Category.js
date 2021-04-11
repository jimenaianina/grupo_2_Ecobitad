
module.exports = (sequelize, datatype)=> {
    const Category  =sequelize.define("Category", 
        cols= {
            category_id:{
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
        }
        