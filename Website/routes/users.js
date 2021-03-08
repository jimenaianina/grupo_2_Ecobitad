const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/acceder', usersController.login); 
router.get('/registro', usersController.register); 


module.exports = router;
