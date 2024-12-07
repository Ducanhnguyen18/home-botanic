'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Plant }) {
      if (!Plant) {
        throw new Error('Plant model needs to be associated with Photo model.');
      }
      this.belongsTo(Plant, { foreignKey: 'plant_id' });
    }
  }
  Photo.init(
    {
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Photos',
    }
  );
  return Photo;
};
