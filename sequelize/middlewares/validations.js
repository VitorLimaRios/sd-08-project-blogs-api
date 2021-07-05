const { Op } = require('sequelize');
const { Users, Categories } = require('../models');

const userExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await Users.findOne({ where: { email } });
  if (user && user.dataValues) {
    res.status(409).json({ message: 'User already registered' });
  } else {
    next();
  }
};

const loginValidate = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email, password } });
  if (user && user.dataValues) {
    res.locals.user = user.dataValues;
    next();
  } else {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

const categoryExists = async (req, res, _next) => {
  const { categoryIds } = req.body;
  const categories = await Categories.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (!categories || categories.length < 1) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = {
  userExists,
  loginValidate,
  categoryExists,
};