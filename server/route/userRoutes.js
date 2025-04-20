const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.route('/').get((req, res) => userController.getAllUsers(req, res))
router.route('/').post((req, res) => userController.saveUser(req, res));

router.route('/:index').get((req, res) => userController.getUser(req, res));

router.post('/', userController.saveUser);  
router.post('/login', userController.loginUser); 

router.get('/session', userController.getSessionUser);

module.exports = router;
console.log("[userRoute] initialized");