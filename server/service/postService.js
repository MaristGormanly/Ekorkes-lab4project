const postController = require('../controller/postController');

exports.getAllPostsService = () => 
{
  return postController.getAllPosts();
};

exports.getPostService = (index) => 
{
  return postController.getPost({ params: { index } });
};

exports.savePostService = (postData) => 
{
  return postController.savePost({ body: postData });
};

console.log("[postService] initialized");
