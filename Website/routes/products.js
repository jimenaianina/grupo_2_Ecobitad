const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/products');
    },
    filename: function (req, file, cb) {
        cb(null, 'fotoProducto' + Date.now() + path.extname(file.originalname))}
});

router.get('/', productsController.index); 

router.get('/detalle/:id', productsController.detail); 

router.get('/carrito', productsController.cart)

const upload = multer( { storage: storage});

router.get('/crear', productsController.create);

router.post('/guardar', upload.any('fotoProducto'), productsController.save);

router.get('/editar/:id', productsController.edit);

router.put('/actualizar/:id', upload.array('fotoProducto'), productsController.update);

router.delete('/borrar/:id', productsController.destroy); 

module.exports = router;
