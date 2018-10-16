'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Berobats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      tgl: {
        type: Sequelize.STRING
      },
      poli: {
        type: Sequelize.STRING
      },
      dokter: {
        type: Sequelize.STRING
      },
      reservasi: {
        type: Sequelize.STRING
      },
      jam: {
        type: Sequelize.STRING
      },
      nmr: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Berobats');
  }
};