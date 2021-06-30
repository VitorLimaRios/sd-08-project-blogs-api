const {
  postsServices: {
    createPost,
    showPosts,
    showPostsById,
  },
} = require('../services');
const code = require('../services/codes');

const postCreate = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { title, content } = req.body;

    const result = await createPost({ title, content, authorization });

    return res.status(code.CREATED).json(result);
  } catch (error) {
    console.error(error);
    return res.status(code.INTERNAL_ERROR).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await showPosts(authorization);

    return res.status(code.OK).json(result);
  } catch (error) {
    console.error(error);
    return res.status(code.INTERNAL_ERROR).json({ message: error.message });
  }
};

const getPostsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await showPostsById(id);

    if (!result) {
      return res.status(code.NOT_FOUND).json({ message: 'Post does not exist' });
    }

    return res.status(code.OK).json(result);
  } catch (error) {
    console.error(error);
    return res.status(code.INTERNAL_ERROR).json({ message: error.message });
  }
};

module.exports = {
  postCreate,
  getPosts,
  getPostsById,
};