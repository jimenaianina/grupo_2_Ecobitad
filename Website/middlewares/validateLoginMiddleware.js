const path = require('path');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/users');
const db = require('../database/models');

const validacionLogin = [
    body('email')
    .notEmpty()
    .isEmail()
    .custom(async value => {
      
      const existentUser = await db.User.findOne({ where: { email: value } });

      if (existentUser) {
        throw new Error('Este correo electrónico ya se encuentra registrado');
    }
    return true;
    
        }),
    body('password')
    .notEmpty()
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