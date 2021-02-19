const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/products');
    },
    filename: function (req, file, cb) {
        cb(null,  + 'fotoProducto' + Date.now() + path.extname(file.originalname))}
});

router.get('/detail', productsController.detail); 

router.get('/cart', productsController.cart)

const upload = multer( { storage: storage});

router.get('/create', productsController.create);

router.post('/create', upload.array('fotoProducto'), productsController.save);

router.get('/edit', productsController.edit);

router.put('/edit', upload.array('fotoProducto'), productsController.update);

module.exports = router;
