const path = require('path');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/users');
const db = require('../database/models');

const validacionLogin = [
    body('email')
    .notEmpty().withMessage('Por favor escribir un correo electrónico')
    .isEmail().withMessage('Por favor escribir un formato de correo válido')
    .custom(value => {
        return User.findOne(value).then(user => {
          if (!user) {
            return Promise.reject('Este correo electrónico no se encuentra registrado');
          }})
        }),
    body('password')
    .notEmpty().withMessage('Por favor escribir una contraseña')
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