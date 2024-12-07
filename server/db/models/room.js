'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({House, User_plant}) {
      this.belongsTo(House, { foreignKey: 'house_id' }),
      this.hasMany(User_plant, { foreignKey: 'room_id' });
    }
  }
  Room.init({
    name: DataTypes.TEXT,
    house_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};