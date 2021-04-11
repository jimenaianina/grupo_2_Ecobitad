
module.exports = (sequelize, datatype)=> {
    const Role  =sequelize.define("Role", 
        cols= {
            id:{
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
            tableName: 'roles' 
         });
        return Role;
        };


Role.associate = function (models){
    Role.hasMany(models.Users, {
        as:"roles",
        foreignKey: "user_role_id"
    })
}
    
            