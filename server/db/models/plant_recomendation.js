'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant_recomendation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Plant }) {
      this.belongsTo(Plant, { foreignKey: 'plant_id' });
    }
  }
  Plant_recomendation.init(
    {
      plant_id: DataTypes.INTEGER,
      watering: DataTypes.TEXT,
      sunlight: DataTypes.TEXT,
      pruning: DataTypes.TEXT,
      specialist_recomendation: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Plant_recomendation',
    }
  );
  return Plant_recomendation;
};
