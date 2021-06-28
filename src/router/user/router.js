const express = require('express');

const router = express.Router();
const validateJwt = require('../../middlewares/jwt/validateJwt');

const {
  createUser,
  loginUser,
  findUser,
} = require('../../controller/user/user');

router.post('/user', createUser);

router.post('/login', loginUser);

router.get('/user', validateJwt, findUser);

module.exports = router;
