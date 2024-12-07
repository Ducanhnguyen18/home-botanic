'use strict';

const PlantPropertiesData = require('../../mockData/mockDataPlantProperties');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Plant_properties', PlantPropertiesData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plant_properties', null, {});
  }
};
