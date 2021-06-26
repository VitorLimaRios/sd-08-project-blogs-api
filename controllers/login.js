const LoginSevices = require('../services/login');

const login = async (req, res) => {
  const { body } = req;

  const token = await LoginSevices.login(body);

  return res.status(201).json({ token });
};

module.exports = {
  login,
};
