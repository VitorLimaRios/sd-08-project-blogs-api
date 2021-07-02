const express = require('express');
const Controller = require('../controllers').BlogPosts;
const isBodyValidFor = require('../middlewares/validations').BlogPosts;
const { notFoundHandler } = require('../middlewares');

const route = express.Router();

route.get('/:id', Controller.findById);

route.put('/:id', isBodyValidFor('update'), Controller.updateById);

route.delete('/:id', Controller.deleteById);

route.get('/', Controller.getAll);

route.post('/', isBodyValidFor('insert'), Controller.insertOne);

route.use('/:notFound', notFoundHandler);

module.exports = route;
