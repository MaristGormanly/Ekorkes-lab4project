const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts); //GET ALL
router.get('/posts/:index', postController.getPost); //GET BY INDEX
router.post('/posts', postController.createPost); //POST
router.put('/posts/:index', postController.updatePost);  // PUT
router.patch('/posts/:index', postController.patchPost);  // PATCH
router.delete('/posts/:index', postController.deletePost);  // DELETE

module.exports = router;

console.log("[postRoute] initialized");


