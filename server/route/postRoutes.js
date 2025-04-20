const express = require('express');
const postController = require('../controller/postController');
const router = express.Router();

// Use auth middleware from app.js
const isAuthenticated = require('../app').isAuthenticated;

router.post('/', isAuthenticated, postController.createPost);
router.get('/', postController.getAllPosts);


router.route('/:index')
  .get((req, res) => postController.getPost(req, res));

module.exports = router;

console.log("[postRoute] initialized");
