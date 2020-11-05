const express = require('express');
const router = express.Router();
const { RegisterUser, LoginUser, getSingleUser } = require('../controller/user.controller');
const { runValidation, registerValidation, loginValidation } = require('../validation');
const middleware = require('../middleware/middleware')

router.post('/register', registerValidation, runValidation, RegisterUser);
router.post('/login', loginValidation, runValidation, LoginUser);
router.get('/user', middleware, getSingleUser);

module.exports = router