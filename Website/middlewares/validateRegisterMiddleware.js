const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Por favor escribir un nombre'), 
    body('email')
    .notEmpty().withMessage('Por favor escribir un correo electrónico')
    .bail().isEmail().withMessage('Por favor escribir un formato de correo válido'), 
    body('password').notEmpty().withMessage('Por favor escribir una contraseña'), 
    body('lastName').notEmpty().withMessage('Por favor escribir un apellido'), 
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones del archivo permitidas son ${acceptedExtensions.join(', ')}');
            }
        }
        return true;
        })
]