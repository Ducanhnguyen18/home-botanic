'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Plant}) {
      this.belongsTo(User, { foreignKey: 'user_id' }),
      this.belongsTo(Plant, { foreignKey: 'plant_id' })
    }
  }
  User_plant.init({
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_plant',
  });
  return User_plant;
};