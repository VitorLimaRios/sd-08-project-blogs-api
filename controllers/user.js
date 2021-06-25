const userServices = require('../services/user');
const s = require('../validations/err');

const createUser = (req, res) => {
  const newUser = req.body;

  userServices.createUser(newUser)
    .then((response) => res.status(s.code.CREATED).json(response))
    .catch((err) => {
      console.log(err.message);
      const { code, message } = JSON.parse(err.message);
      res.status(code).json({ message });
    });
};

const getAllUsers = async (req, res) => {
  userServices.getAllUsers()
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log(err));
};

module.exports = {
  createUser,
  getAllUsers,
};