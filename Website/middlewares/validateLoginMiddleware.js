const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const validacionLogin = [
    body('email')
    .notEmpty().withMessage("El campo de email no puede estar vacío")
    .isEmail().withMessage('El formato de correo debe ser válido')
    .custom(async value => {
      
      const existentUser = await db.User.findOne({ where: { email: value } });

      if (existentUser) {
        throw new Error('Este correo electrónico ya se encuentra registrado');
    }
    return true;
    
        }),

    body('password')
      .notEmpty().withMessage("El campo de contraseña no puede estar vacío")
      .custom(value => {
        return User.findOne(req.body.email)
        .then( user => {
          let passwordToMatch = bcrypt.compareSync(value, user.password);
          if (!passwordToMatch) {
            return Promise.reject('Contraseña inválida');
          }})
        })
    ];

module.exports = validacionLogin