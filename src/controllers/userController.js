const UserService = require('../services/userService');

const SERVER_ERROR = 500;
const OK = 200;
const CREATED = 201;

const addUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await UserService
      .addUser(displayName, email, password, image);
    return res.status(CREATED).json({ token });
  } catch (err) {
    res.status(SERVER_ERROR).json({ message: 'Erro brabo' });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await UserService.userLogin(email, password);
    return res.status(OK).json({ token });
  } catch (err) {
    res.status(SERVER_ERROR).json({ message: 'Erro brabo' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const results = await UserService.getAllUsers();
    return res.status(OK).json(results);
  } catch (err) {
    res.status(SERVER_ERROR).json({ message: 'Erro brabo' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await UserService.getUserById(id);
    return res.status(OK).json(results);
  } catch (err) {
    res.status(SERVER_ERROR).json({ message: 'Erro brabo' });
  }
};

module.exports = {
  addUser,
  userLogin,
  getAllUsers,
  getUserById,
};