
module.exports = (sequelize, datatype)=> {
    const Size  =sequelize.define("Size", 
        cols= {
            size_id:{
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
            