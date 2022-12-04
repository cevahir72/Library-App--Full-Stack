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
      
      books.belongsTo(models.authors,{
        foreignKey:"authorId"
      }); 
  
      books.belongsTo(models.publishers,{
        foreignKey:"publisherId"
      });
      
      books.belongsTo(models.categories,{
        foreignKey:"categoryId"
      });
      
    }
  }
  books.init({
    book: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'books',
    timestamps:false
  });
  return books;
};