const postService = require('../service/postService');

// Get all posts
exports.getAllPosts = async (req, res) => 
{
  const posts = await postService.getAllPostsService();
  res.status(200).json(posts);
};

// Get one post
exports.getPost = async (req, res) => 
{
  const index = req.params.index;
  const post = await postService.getPostService(index);

  if (post) res.status(200).json(post);
  else res.status(404).json({ message: 'Post not found' });
};

// Create a post
exports.createPost = async (req, res) => 
{
  const post = await postService.savePostService(req.body);
  res.status(201).json(post);
};

// Full update
exports.updatePost = async (req, res) => 
{
  const index = req.params.index;
  const post = await postService.updatePostService(index, req.body);
  res.status(200).json(post);
};

// Partial update
exports.patchPost = async (req, res) => 
{
  const index = req.params.index;
  const post = await postService.patchPostService(index, req.body);
  res.status(200).json(post);
};

// Delete post
exports.deletePost = async (req, res) => 
{
  const index = req.params.index;
  await postService.deletePostService(index);
  res.status(204).send();
};

console.log("[postController] initialized");
