'use strict';
const PlantsData = require('../../mockData/mockDataPlants');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Plants', PlantsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plants', null, {});
  },
};
