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
      
      models.authors.hasMany(books);
      books.belongsTo(models.authors); 
  
      books.belongsTo(models.publishers);
      models.publishers.hasMany(books);
  
      models.categories.hasMany(books);
      books.belongsTo(models.categories);
      
    }
  }
  books.init({
    book: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'books',
    timestamps:false
  });
  return books;
};