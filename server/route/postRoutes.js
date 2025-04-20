const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.get('/posts/:index', postController.getPost);
router.post('/posts', postController.createPost);
router.put('/posts/:index', postController.updatePost);  // PUT
router.patch('/posts/:index', postController.patchPost);  // PATCH
router.delete('/posts/:index', postController.deletePost);  // DELETE

module.exports = router;

console.log("[postRoute] initialized");


