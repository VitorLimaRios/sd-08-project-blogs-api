const express = require('express');

const middlewares = require('../middlewares');
const PostController = require('../controllers/blogPost');

const { blogPost: postMiddlewares } = middlewares;

const router = express.Router();

router.post('/', postMiddlewares.validationBlogPost, middlewares.auth, PostController.create);

module.exports = router;