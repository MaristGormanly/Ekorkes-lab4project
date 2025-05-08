const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/session', userController.getSessionUser);
router.get('/', userController.getAllUsers);
router.get('/:index', userController.getUser);
router.post('/', userController.saveUser);
router.put('/:index', userController.updateUser);
router.patch('/:index', userController.patchUser);
router.delete('/:index', userController.deleteUser);

module.exports = router;

