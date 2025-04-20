const posts = [];

exports.createPost = (req, res) => 
  {
  const { content, username } = req.body;

  // Create a new post with the provided data
  const newPost = 
  {
    username: username,
    content: content,
    timestamp: new Date()
  };

  posts.push(newPost); // Save the new post

  res.status(201).json(newPost);  // Send the newly created post back in the response
};

exports.getAllPosts = (req, res) => 
  {
  res.status(200).json(posts);  // Send all posts
};

exports.getPost = (req, res) => 
  {
  const { index } = req.params;
  const post = posts[index];

  if (post) 
    {
    res.status(200).json(post);  // Send the specific post if found
  } else 
  {
    res.status(404).send({ message: 'Post not found' });  // If post doesn't exist
  }
};

// PUT - Update post completely
exports.updatePost = (req, res) => 
  {
  const { index } = req.params;
  const { content, username } = req.body;

  const post = posts[index];

  if (!post) 
    {
    return res.status(404).send({ message: 'Post not found' });
  }

  // Update all fields (content, username)
  if (content) post.content = content;
  if (username) post.username = username;

  res.status(200).json(post);
};

// PATCH - Partially update post
exports.patchPost = (req, res) => 
  {
  const { index } = req.params;
  const { content, username } = req.body;

  const post = posts[index];

  if (!post) 
    {
    return res.status(404).send({ message: 'Post not found' });
  }

  // Update only provided fields
  if (content) post.content = content;
  if (username) post.username = username;

  res.status(200).json(post);
};

// DELETE - Delete a post
exports.deletePost = (req, res) => 
  {
  const { index } = req.params;

  if (posts[index]) 
    {
    posts.splice(index, 1);
    res.status(204).send();  // No content after successful deletion
  } else 
  {
    res.status(404).send({ message: 'Post not found' });
  }
};

console.log("[postController] initialized");
