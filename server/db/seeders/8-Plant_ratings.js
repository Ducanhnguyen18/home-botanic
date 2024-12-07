'use strict';
const PlantRatingsData = require('../../mockData/mockDataPlantRatings');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Plant_ratings', PlantRatingsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plant_ratings', null, {});
  }
};
