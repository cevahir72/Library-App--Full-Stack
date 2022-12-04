'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publishers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      publishers.hasMany(models.books,{
        foreignKey:"publisherId"
      });
    }
  }
  publishers.init({
    publisher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'publishers',
    timestamps:false
  });
  return publishers;
};