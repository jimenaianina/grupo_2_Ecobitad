const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/users');
    },
    filename: function (req, file, cb) {
        cb(null, 'fotoPerfil' + Date.now() + path.extname(file.originalname))}
});

const upload = multer( { storage: storage});

router.get('/perfil/:id', usersController.profile);
router.get('/acceder', usersController.login);
router.post('/acceder', usersController.processLogin)
router.get('/registro', usersController.register);
router.post('/crear', upload.any('fotoUsuario'), usersController.create);
router.delete('/eliminar/:id', usersController.destroy); 


module.exports = router;
