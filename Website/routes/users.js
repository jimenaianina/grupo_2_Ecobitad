const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/users');
    },
    filename: function (req, file, cb) {
        cb(null, 'fotoPerfil' + Date.now() + path.extname(file.originalname))}
});

const upload = multer( { storage: storage});
const validaciones = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/acceder', usersController.login);
router.post('/acceder', usersController.processLogin);
router.get('/salir', usersController.logout);
router.get('/perfil/:id', authMiddleware, usersController.profile);
router.get('/registro', guestMiddleware, usersController.register);
router.post('/registro', upload.any('fotoUsuario'), validaciones, usersController.processRegister);
router.delete('/eliminar/:id', usersController.destroy);


module.exports = router;
