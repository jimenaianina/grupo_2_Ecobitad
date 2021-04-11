
module.exports = (sequelize, datatype)=> {
    const UsersRole  =sequelize.define("UserRole", 
        cols= {
            role_id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataTypes.INTEGER
            },
            role_name:{
                allowNull: false,
                type: dataTypes.VARCHAR(20)
            }
        },
            {
            tableName: 'users_roles' 
         });
        return UsersRole;
        };


User.associate = function (models){
    UsersRole.hasMany(models.Users, {
        as:"role",
        foreignKey: "user_role_id"
    })
}
    
            