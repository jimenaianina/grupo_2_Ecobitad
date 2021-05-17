const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');

const upload = require('../middlewares/multerMiddleware');
const validacionRegistro = require('../middlewares/validateRegisterMiddleware');
const validacionLogin = require('../middlewares/validateLoginMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/acceder', usersController.login);

router.post('/acceder', validacionLogin, usersController.processLogin);

router.get('/salir', usersController.logout);

router.get('/perfil/:id', authMiddleware, validacionLogin ,usersController.profile);

router.get('/registro', guestMiddleware, usersController.register);

router.post('/registro', upload.single('image'), validacionRegistro, usersController.processRegister);

router.post('/salir', usersController.logout);

router.delete('/eliminar/:id', usersController.destroy);

router.get('/carrito', usersController.cart);

router.post('/carrito/:id', usersController.addCart);

router.delete('/eliminar-carrito/:id', usersController.destroyCart);


module.exports = router;
