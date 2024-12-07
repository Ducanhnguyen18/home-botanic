'use strict';
const PhotosData = require('../../mockData/mockDataPhotos');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Photos', PhotosData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
