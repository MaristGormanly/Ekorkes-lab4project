const posts = [];

exports.createPost = (req, res) => {
  // Check if user is logged in via session
  if (!req.session || !req.session.user) {
    return res.status(401).json({ message: 'You must be logged in to post.' });
  }

  const { content } = req.body;

  if (!content || content.trim() === "") {
    return res.status(400).json({ message: 'Post content cannot be empty.' });
  }

  const post = {
    username: req.session.user.username,
    content,
    date: new Date().toISOString()
  };

  posts.push(post);
  res.status(201).json(post);
};

exports.getAllPosts = (req, res) => {
  res.status(200).json(posts);
};
