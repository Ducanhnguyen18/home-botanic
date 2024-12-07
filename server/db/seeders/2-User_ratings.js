'use strict';
const UsersRatings = require('../../mockData/mockDataUserRatings');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_ratings', UsersRatings, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_ratings', null, {});
  },
};
