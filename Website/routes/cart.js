const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', cartController.cart);

router.post('/:id', cartController.addCart);

router.delete('/eliminar/:id', cartController.destroyCart);

router.get('/continuar', cartController.continue);

module.exports = router;