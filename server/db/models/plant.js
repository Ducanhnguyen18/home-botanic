"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    static associate({
      User_plant,
      Plant_rating,
      Plant_recomendation,
      Plant_property,
      Plant_faq,
      Photo,
    }) {
      if (User_plant) {
        this.hasMany(User_plant, { foreignKey: "plant_id" });
      }
      if (Plant_rating) {
        this.hasOne(Plant_rating, { foreignKey: "plant_id" }) || null;
      }
      if (Photo) {
        this.hasMany(Photo, { foreignKey: "plant_id" }) || null;
      }
      if (Plant_property) {
        this.hasOne(Plant_property, { foreignKey: "plant_id" }) || null;
      }
      if (Plant_recomendation) {
        this.hasOne(Plant_recomendation, { foreignKey: "plant_id" }) || null;
      }
      if (Plant_faq) {
        this.hasMany(Plant_faq, { foreignKey: "plant_id" }) || null;
      }
    }
  }
  Plant.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Plant",
    }
  );
  return Plant;
};
