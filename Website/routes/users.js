const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

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

router.get('/editar/:id', usersController.edit);

router.put('/actualizar/:id', upload.single('image'), usersController.update);

router.delete('/eliminar/:id', usersController.destroy);


module.exports = router;
