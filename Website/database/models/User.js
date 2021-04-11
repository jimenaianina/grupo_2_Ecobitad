module.exports = (sequelize, datatype)=> {
const User =sequelize.define("User", 
cols= {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER
    },
    user_name:{
        allowNull: false,
        type: dataTypes.VARCHAR(25)
    },
    last_name: {
        allowNull: false,
        type: dataTypes.VARCHAR(25)
    },
    email: {
        allowNull: false,
        type: dataTypes.VARCHAR(50)
    },
    age:{
        allowNull: false,
        type: dataTypes.INTEGER
    },
    city: {
        allowNull: false,
        type: dataTypes.VARCHAR(50)
    },
    image:{
        allowNull: true,
        type: dataTypes.VARCHAR(300)
    },
    user_role_id:{
        allowNull: false,
        type: dataTypes.INTEGER
    },
    createdAt: {
        type: dataTypes.DATE
    },
    updatedAt: {
        type: dataTypes.DATE
    }
});
return User;
};

User.associate = function (models){
    User.belongsTo(models.UsersRole, {
        as:"role",
        foreignKey: "user_role_id"
    })
}

User.associate = function (models){
    User.hasMany(models.Cart)
}
    