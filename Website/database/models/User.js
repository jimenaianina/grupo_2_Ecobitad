module.exports = (sequelize, dataType)=> {
const User =sequelize.define("User", 
{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: dataType.INTEGER
    },
    user_name:{
        allowNull: false,
        type: dataType.STRING
    },
    last_name: {
        allowNull: false,
        type: dataType.STRING
    },
    email: {
        allowNull: false,
        type: dataType.STRING
    },
    age:{
        allowNull: false,
        type: dataType.INTEGER
    },
    city: {
        allowNull: false,
        type: dataType.STRING
    },
    image:{
        allowNull: true,
        type: dataType.STRING
    },
     role_id:{
        allowNull: false,
        type: dataType.INTEGER
    },
    password: {
        allowNull: false,
        type: dataType.STRING
    }
}, { 
    timestamps: false
});

User.associate = function (models){
    User.belongsTo(models.Role, {
        as:"role",
        foreignKey: "role_id"
    })
    User.hasMany(models.Cart)
}
return User;
};



    