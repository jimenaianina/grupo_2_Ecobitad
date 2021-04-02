const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');

const upload = require('../middlewares/multerMiddleware');
const validaciones = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/acceder', usersController.login);

router.post('/acceder', usersController.processLogin);

router.get('/salir', usersController.logout);

router.get('/perfil/:id', authMiddleware, usersController.profile);

router.get('/registro', guestMiddleware, usersController.register);

router.post('/registro', upload.single('image'), validaciones, usersController.processRegister);

router.post('/salir', usersController.logout);

router.delete('/eliminar/:id', usersController.destroy);


module.exports = router;
