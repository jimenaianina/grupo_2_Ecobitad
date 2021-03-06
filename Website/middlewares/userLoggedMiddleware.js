const db = require('../database/models');

const userLoggedMiddleware = async (req, res, next) => {

    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
    
    if (emailInCookie) {
    
    const userFromCookie = await db.User.findOne({
        where: { 
            email: emailInCookie
        }
    })

    if(userFromCookie) {
        req.session.userLogged = userFromCookie
    }}

    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
}

module.exports = userLoggedMiddleware;

