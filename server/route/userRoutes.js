const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.route('/')
  .get((req, res) => userController.getAllUsers(req, res))
  .post((req, res) => userController.saveUser(req, res));

router.route('/:index')
  .get((req, res) => userController.getUser(req, res));

module.exports = router;

console.log("[userRoute] initialized");
