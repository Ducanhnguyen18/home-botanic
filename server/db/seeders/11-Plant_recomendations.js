'use strict';
const PlantRecomendationsData = require('../../mockData/mockDataPlantRecomendations');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Plant_recomendations', PlantRecomendationsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plant_recomendations', null, {});
  }
};
