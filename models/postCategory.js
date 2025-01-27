const PostCategory = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostCategory', {},
    { timestamps: false, tableName: 'PostsCategories' });

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};

module.exports = PostCategory;