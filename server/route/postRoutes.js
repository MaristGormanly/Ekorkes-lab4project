const express = require('express');
const postController = require('../controller/postController');

const router = express.Router();

router.route('/')
  .get((req, res) => postController.getAllPosts(req, res))
  .post((req, res) => postController.savePost(req, res));

router.route('/:index')
  .get((req, res) => postController.getPost(req, res));

module.exports = router;

console.log("[postRoute] initialized");
