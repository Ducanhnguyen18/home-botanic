'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant_rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Plant }) {
      this.belongsTo(Plant, { foreignKey: 'plant_id' });
    }
  }
  Plant_rating.init(
    {
      plant_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Plant_rating',
    }
  );
  return Plant_rating;
};
