const { User } = require('../models');
const createJWT = require('../utils/createJWT');
const loginValidator = require('../utils/loginValidator');
const userValidator = require('../utils/userValidator');

const addUser = async (newUser) => {
  const userValidation = await userValidator(newUser);
  if (userValidation.error) return userValidation;
  await User.create(newUser);
  return {
    token: createJWT(userValidation),
  };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const login = async ({ email, password }) => {
  const loginValidation = await loginValidator(email, password);
  if (loginValidation.error) return loginValidation;
  return {
    token: createJWT(loginValidation),
  };
};

module.exports = {
  addUser,
  getAllUsers,
  login,
};