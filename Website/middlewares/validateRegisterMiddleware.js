const path = require('path');
const { body } = require('express-validator');

const validacionRegistro = [
    body('name').notEmpty().isLength({ min: 2 }), 
    body('lastName').notEmpty().isLength({ min: 2 }), 
    body('email')
    .notEmpty()
    .isEmail()
    .custom(value => {
        return User.findOne(value).then(user => {
          if (user) {
            return Promise.reject('Este correo electrónico ya se encuentra registrado');
          }})
        }),
    body('password')
    .notEmpty()
    .isLength({ min: 8 })
    .matches('[0-9]')
    .matches('[A-Z]')
    .matches('[a-z]'),
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