'use strict';

const { addListener } = require("../../app");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true, // Incrementar Automaticamente
        allowNull: false, // Sempre Obrigatório
      },

      name: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true, // Garantir um email cadastrado só 1 vez.
        allowNull: false,
      },
      password_hash: { //criptorgrafar senha
        type: Sequelize.String,
        allowNull:false,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
