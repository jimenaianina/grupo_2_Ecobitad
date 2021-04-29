const { body } = require('express-validator');

const validaciones = [
    body('email')
    .notEmpty().withMessage('Por favor escribir un correo electrónico')
    .isEmail().withMessage('Por favor escribir un formato de correo válido'),
    body('password')
    .notEmpty().withMessage('Por favor escribir una contraseña')
    ];

function authMiddleware(req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/usuario/acceder')
    }
    next();
}

module.exports = authMiddleware;