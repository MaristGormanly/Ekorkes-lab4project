const User = require('../model/user');
const users = [];

exports.getAllUsers = (req, res) => 
{
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(users);
};

exports.getUser = (req, res) => 
{
  const index = req.params.index;
  if (users[index]) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(users[index]);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
};

exports.saveUser = (req, res) => 
  {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
  {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  const newUser = User.createUser(username, email, password);
  users.push(newUser);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send(newUser);
};

exports.loginUser = (req, res) => 
  {
  const { username, password } = req.body;

  if (!username || !password) 
    {
    return res.status(400).send({ message: 'Username and password are required' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Initialize session if it doesn't exist
    if (!req.session) 
      {
      req.session = {}; // Initialize session object
    }
    req.session.user = user;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({ message: 'Login successful', user });
  } else 
  {
    res.status(401).send({ message: 'Invalid username or password' });
  }
};

exports.getSessionUser = (req, res) => 
  {
  if (req.session && req.session.user) 
    {
    res.status(200).json({ user: req.session.user });
  } else 
  {
    res.status(200).json({ user: null });
  }
};

// PUT - Update user completely
exports.updateUser = (req, res) => 
  {
  const { index } = req.params;
  const { username, email, password } = req.body;

  const user = users[index];

  if (!user) 
    {
    return res.status(404).send({ message: 'User not found' });
  }

  // Update all fields (username, email, password)
  if (username) user.username = username;
  if (email) user.email = email;
  if (password) user.password = password;

  res.status(200).json(user);
};

// PATCH - Partially update user
exports.patchUser = (req, res) => 
  {
  const { index } = req.params;
  const { username, email, password } = req.body;

  const user = users[index];

  if (!user) 
    {
    return res.status(404).send({ message: 'User not found' });
  }

  // Update only provided fields
  if (username) user.username = username;
  if (email) user.email = email;
  if (password) user.password = password;

  res.status(200).json(user);
};

// DELETE - Delete a user
exports.deleteUser = (req, res) => 
  {
  const { index } = req.params;

  if (users[index]) 
    {
    users.splice(index, 1);
    res.status(204).send();  // No content after successful deletion
  } else 
  {
    res.status(404).send({ message: 'User not found' });
  }
};

console.log("[userController] initialized");
