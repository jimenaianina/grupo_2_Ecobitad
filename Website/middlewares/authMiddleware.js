const { body } = require('express-validator');

function authMiddleware(req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/usuario/acceder')
    }
    next();
}

module.exports = authMiddleware;