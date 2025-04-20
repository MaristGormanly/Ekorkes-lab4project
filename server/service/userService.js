
const userController = require('../controller/userController');

exports.getAllUsersService = () => 
{
  return userController.getAllUsers();
};

exports.getUserService = (index) => 
{
  return userController.getUser({ params: { index } });
};

exports.saveUserService = (userData) => 
{
  return userController.saveUser({ body: userData });
};

console.log("[userService] initialized");
