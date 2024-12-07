'use strict';
const UserPlantsData = require('../../mockData/mockDataUserPlants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_plants', UserPlantsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_plants', null, {});
  }
};
