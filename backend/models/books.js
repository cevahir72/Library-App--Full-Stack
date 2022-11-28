'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      books.belongsTo(models.publishers);
      models.publishers.hasMany(books);
      books.belongsTo(models.categories);
      models.categories.hasMany(books);
      books.belongsTo(models.authors);
      models.authors.hasMany(books);
    }
  }
  books.init({
    bookName: DataTypes.STRING, allowNull: false
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};