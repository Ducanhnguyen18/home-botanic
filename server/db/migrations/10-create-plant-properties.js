'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    if (!queryInterface || !Sequelize) {
      throw new Error('queryInterface or Sequelize is missing');
    }

    try {
      await queryInterface.createTable('Plant_properties', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        plant_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Plants",
            key: "id",
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        cycle: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        sun: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        watering: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        propagation: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        flowers: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        fruits: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        edible: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        leaf: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        leaf_color: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        growth_rate: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        maintenance: {
          type: Sequelize.TEXT,
          allowNull: true,
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
      console.error('Error creating Plant_properties table:', error);
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Plant_properties');
  },
};
