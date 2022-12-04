'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      authors.hasMany(models.books,{
        foreignKey: "authorId"
      });
    }
  }
  authors.init({
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'authors',
    timestamps:false
  });
  return authors;
};