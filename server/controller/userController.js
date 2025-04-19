const User = require('../model/user');

let users = 
[
  User.createUser("Brian", "Gormanly"),
  User.createUser("George", "Lucas"),
  User.createUser("Ali", "Khan")
];

exports.getAllUsers = (req, res) => 
{
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
};

exports.getUser = (req, res) => 
{
  res.setHeader('Content-Type', 'application/json');
  res.send(users[req.params.index]);
};

exports.saveUser = (req, res) => 
{
  let newUser = User.createUser(req.body.firstName, req.body.lastName);
  users.push(newUser);
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
};

console.log("[userController] loaded");
