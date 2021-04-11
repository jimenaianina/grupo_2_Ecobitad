
module.exports = (sequelize, datatype)=> {
    const Color  =sequelize.define("Color", 
        cols= {
            color_id:{
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
            