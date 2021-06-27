const BlogPosts = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'users' });
  };
  
  return BlogPostsTable;
};

module.exports = BlogPosts;