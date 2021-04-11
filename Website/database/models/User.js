module.exports = (sequelize, datatype)=> {
const Usuario =sequelize.deine(users, {
    id:{
        primaryKey: true,
        type: dataTypes.INTERGER
    },
    users_name:{
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
        type: dataTypes.INT
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
        type: dataTypes.INT
    },




};
return Usuario;
}
    