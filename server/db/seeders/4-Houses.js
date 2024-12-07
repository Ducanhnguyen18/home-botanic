'use strict';
const HousesData = require('../../mockData/mockDataHouses');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Houses', HousesData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Houses', null, {});
  }
};
