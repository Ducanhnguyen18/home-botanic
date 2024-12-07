'use strict';
const PlantFaqData = require('../../mockData/mockDataPlant_faqs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Plant_faqs', PlantFaqData, {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Plant_faqs', null, {});
  }
};
