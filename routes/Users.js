const express = require('express');
const Controller = require('../controllers').Users;
const isBodyValidFor = require('../middlewares/validations').Users;
const { notFoundHandler, jwtAuthentication } = require('../middlewares');

const route = express.Router();

route.get('/:id', jwtAuthentication('Users'), Controller.findById);

route.put('/:id', isBodyValidFor('update'), Controller.updateById);

route.delete('/:id', Controller.deleteById);

route.get('/', jwtAuthentication('Users'), Controller.getAll);

route.post('/', isBodyValidFor('insert'), Controller.insertOne);

route.use('/:notFound', notFoundHandler);

module.exports = route;