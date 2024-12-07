"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  if (sequelize === null || sequelize === undefined) {
    throw new Error("sequelize object is null or undefined");
  }
  class Plant_property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Plant }) {
      if (Plant === null || Plant === undefined) {
        throw new Error("Plant object is null or undefined");
      }
      this.belongsTo(Plant, { foreignKey: "plant_id" });
    }
  }
  Plant_property.init(
    {
      plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cycle: DataTypes.TEXT,
      sun: DataTypes.TEXT,
      watering: DataTypes.TEXT,
      propagation: DataTypes.TEXT,
      flowers: DataTypes.TEXT,
      fruits: DataTypes.TEXT,
      edible: DataTypes.TEXT,
      leaf: DataTypes.TEXT,
      leaf_color: DataTypes.TEXT,
      growth_rate: DataTypes.TEXT,
      maintenance: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Plant_properties",
    }
  );
  return Plant_property;
};
