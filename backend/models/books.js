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
      
      books.belongsTo(models.authors); 
  
      books.belongsTo(models.publishers);
      
      books.belongsTo(models.categories);
      
    }
  }
  books.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    book:{
      type:DataTypes.STRING,
      allowNull: true} ,
    authorId: {
      type:DataTypes.INTEGER,
      allowNull: true} ,
    categoryId: {
      type:DataTypes.INTEGER,
      allowNull: true} ,
    publisherId: {
      type:DataTypes.INTEGER,
      allowNull: true} ,
  }, {
    sequelize,
    modelName: 'books',
    timestamps:false
  });
  return books;
};