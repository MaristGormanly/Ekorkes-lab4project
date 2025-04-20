const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers); //GET ALL
router.get('/users/:index', userController.getUser); //GET BY INDEX
router.post('/users', userController.saveUser); //POST
router.put('/users/:index', userController.updateUser);  // PUT
router.patch('/users/:index', userController.patchUser);  // PATCH
router.delete('/users/:index', userController.deleteUser);  // DELETE

module.exports = router;  
console.log("[userRoutes] initialized");
