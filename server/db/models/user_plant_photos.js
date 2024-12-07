'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_plant_photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User_plant}) {
      this.belongsTo(User_plant, { foreignKey: 'user_plant_id' });
    }
  }
  User_plant_photo.init({
    user_plant_id: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User_plant_photos',
  });
  return User_plant_photo;
};