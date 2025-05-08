const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.get('/', postController.getAllPosts); // GET /api/posts
router.get('/:index', postController.getPost);
router.post('/', postController.createPost);
router.put('/:index', postController.updatePost);
router.patch('/:index', postController.patchPost);
router.delete('/:index', postController.deletePost);

module.exports = router;


