const userService = require('../service/userService');

// Get all users
exports.getAllUsers = async (req, res) => 
{
  const users = await userService.getAllUsersService();
  res.status(200).json(users);
};

// Get single user
exports.getUser = async (req, res) => 
{
  const index = req.params.index;
  const user = await userService.getUserService(index);

  if (user) res.status(200).json(user);
  else res.status(404).json({ message: 'User not found' });
};

// Save new user
exports.saveUser = async (req, res) => 
{
  const user = await userService.saveUserService(req.body);
  res.status(201).json(user);
};

// Full update
exports.updateUser = async (req, res) => 
{
  const index = req.params.index;
  const user = await userService.updateUserService(index, req.body);
  res.status(200).json(user);
};

// Partial update
exports.patchUser = async (req, res) => 
{
  const index = req.params.index;
  const user = await userService.patchUserService(index, req.body);
  res.status(200).json(user);
};

// Delete user
exports.deleteUser = async (req, res) => 
{
  const index = req.params.index;
  await userService.deleteUserService(index);
  res.status(204).send();
};

// Get session user (for persistent login)
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

console.log("[userController] initialized");
