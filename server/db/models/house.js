'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  House.init({
    address: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};