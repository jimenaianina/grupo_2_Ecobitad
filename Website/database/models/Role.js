
module.exports = (sequelize, dataType)=> {
    const Role  =sequelize.define("Role", 
        {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            role_name:{
                allowNull: false,
                type: dataType.STRING
            }
        }, { 
            timestamps: false
        });

         Role.associate = function (models){
            Role.hasMany(models.User, {
                as:"role",
                foreignKey: "user_role_id"
            })
        }
        
        return Role;

        };



    
            