'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserProfiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      ttl: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jk: {
        type: Sequelize.STRING
      },
      kerja: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.STRING
      },
      ibu: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('UserProfiles');
  }
};