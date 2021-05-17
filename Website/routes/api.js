const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users', apiController.allUsers);

router.get('/users/:id', apiController.oneUser);

router.get('/products', apiController.allProducts);

router.get('/products/:id', apiController.oneProduct);

module.exports = router;
