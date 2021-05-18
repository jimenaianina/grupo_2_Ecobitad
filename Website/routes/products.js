const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerMiddleware');

const validacionProducto = require('../middlewares/validateProductsMiddleware'); 

router.get('/', productsController.index); 

router.get('/detalle/:id', productsController.detail); 

router.get('/crear', productsController.create);

router.post('/guardar', upload.any('image'), validacionProducto, productsController.save);

router.get('/editar/:id', productsController.edit);

router.put('/actualizar/:id', upload.any('fotoProducto'), validacionProducto, productsController.update);

router.delete('/eliminar/:id', productsController.destroy); 

module.exports = router;
