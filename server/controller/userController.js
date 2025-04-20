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
  if (users[index]) 
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(users[index]);
  } else 
  {
    res.status(404).send({ message: 'User not found' });
  }
};

exports.saveUser = (req, res) => 
{
  const { username, email, password } = req.body;
  const newUser = User.createUser(username, email, password);
  users.push(newUser);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send(newUser);
};

console.log("[userController] initialized");

exports.loginUser = (req, res) => 
    {
      const { username, password } = req.body;
      const user = users.find(u => u.username === username && u.password === password);
    
      if (user) 
      {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ message: 'Login successful', user });
      } else 
      {
        res.status(401).send({ message: 'Invalid username or password' });
      }
    };
    
    exports.getSessionUser = (req, res) => 
      {
      if (req.session.user) 
      {
        res.status(200).json({ user: req.session.user });
      } else 
      {
        res.status(200).json({ user: null });
      }
    };
    