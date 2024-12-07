'use strict';
const UserPlantPhotosData = require('../../mockData/mockDataUserPlantPhotos');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_plant_photos', UserPlantPhotosData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_plant_photos', null, {});
  }
};
