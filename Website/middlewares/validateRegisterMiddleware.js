const path = require('path');
const { body } = require('express-validator');

const validacionRegistro = [
    body('name').notEmpty().isLength({ min: 2 }).withMessage('Por favor escribir un nombre'), 
    body('lastName').notEmpty().isLength({ min: 2 }).withMessage('Por favor escribir un apellido'), 
    body('email')
    .notEmpty().withMessage('Por favor escribir un correo electrónico')
    .isEmail().withMessage('Por favor escribir un formato de correo válido')
    .custom(value => {
        return User.findOne(value).then(user => {
          if (user) {
            return Promise.reject('Este correo electrónico ya se encuentra registrado');
          }})
        }),
    body('password')
    .notEmpty().withMessage('Por favor escribir una contraseña')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches('[0-9]').withMessage('Password Must Contain a Number')
    .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
    .matches('[a-z]').withMessage('Password Must Contain a Lowercase Letter'),
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ("Las extensiones del archivo permitidas son " + acceptedExtensions.join(', '));
            }
        }
        return true;
        })
    ];

module.exports = validacionRegistro