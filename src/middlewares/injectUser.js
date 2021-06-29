const { User } = require('../../models');

const injectUser = async (req, res, next) => {
  const { email } = req;
  console.log('email', email);

  const findUser = await User.findAll();
  console.log('findUser', findUser);

  req.users = findUser;

  next();
};

module.exports = {
  injectUser,
};