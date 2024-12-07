'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant_faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Plant }) {
      this.belongsTo(Plant, { foreignKey: 'plant_id' });
    }
  }
  Plant_faq.init(
    {
      plant_id: DataTypes.INTEGER,
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Plant_faq',
    }
  );
  return Plant_faq;
};
