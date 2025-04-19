const Post = require('../model/post');

let posts = 
[
  Post.createPost("First Post", "This is the first post"),
  Post.createPost("Second Post", "Here's another post")
];

exports.getAllPosts = (req, res) =>
{
  res.setHeader('Content-Type', 'application/json');
  res.send(posts);
};

exports.getPost = (req, res) => 
{
  res.setHeader('Content-Type', 'application/json');
  res.send(posts[req.params.index]);
};

exports.savePost = (req, res) => 
{
  let newPost = Post.createPost(req.body.title, req.body.body);
  posts.push(newPost);
  res.setHeader('Content-Type', 'application/json');
  res.send(posts);
};

console.log("[postController] loaded");
