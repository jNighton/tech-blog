const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "user",
          key: "id",
      },
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    updatedAt: false,
    createdAt: "timestamp",
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
