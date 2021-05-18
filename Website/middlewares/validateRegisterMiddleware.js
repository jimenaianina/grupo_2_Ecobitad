const path = require('path');
const { body } = require('express-validator');
const db = require('../database/models');
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

const validacionRegistro = [
    body('name')
        .notEmpty().withMessage('El nombre no debe estar vacío')
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

    body('lastName')
        .notEmpty().withMessage('El apellido no debe estar vacío')
        .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),

    body('email')
        .notEmpty().withMessage("El campo de email no debe estar vacío")
        .isEmail()
        .withMessage('El formato de correo no es válido')
        .custom(async value => {
            // El validador funcionará de forma asíncrona
            // En findOne hay que pasarle la condición where, no el string directo
            const existentUser = await db.User.findOne({ where: { email: value } });
            // Si existent user encontró un valor, dispara error, caso contrario retorna true
            if (existentUser) {
                throw new Error('Este correo electrónico ya se encuentra registrado');
            }
            return true;

        }),
    body('password')
        .notEmpty().withMessage("El campo de contraseña no debe estar vacío")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
        .matches(regex).withMessage("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial ($ @ $ ! % * ? & .)"),
    
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error("Las extensiones del archivo permitidas son " + acceptedExtensions.join(', '));
            }
        }
        return true;
    })
];

module.exports = validacionRegistro