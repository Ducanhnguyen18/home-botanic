'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('Plant_recomendations', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        plant_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Plants',
            key: 'id',
          },
          onDelete: 'CASCADE', // Prevent orphaned recomendations
        },
        watering: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        sunlight: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        pruning: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        specialist_recomendation: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    } catch (error) {
      console.error('Error creating Plant_recomendations table:', error);
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Plant_recomendations');
  },
};
