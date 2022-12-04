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
      publishers.hasMany(models.books);
    }
  }
  publishers.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    publisher:{
        type: DataTypes.STRING,
        allowNull: true
    } 
  }, {
    sequelize,
    modelName: 'publishers',
    timestamps:false
  });
  return publishers;
};