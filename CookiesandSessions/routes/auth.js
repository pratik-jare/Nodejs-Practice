const express = require('express');

const authController = require('../controllers/auth');
const path = require('path');
 
 
const router = express.Router();

router.get('/login',  authController.getLogin);


module.exports = router;
