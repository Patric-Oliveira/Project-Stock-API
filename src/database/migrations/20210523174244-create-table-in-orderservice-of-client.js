'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('ordersservices', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      vehicle_plate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      vehicle_color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      year: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fuel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      problem_reported: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      problem_found: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      service_performed: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      total_parts: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      total_services: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      total_price: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      responsible: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'clients', key: 'id'},
        onDelete: 'SET NULL', //quando apagar um client fica nullo
        onUpdate: 'CASCADE', //quando atualizar todos o componentes relacionas vão atualizar
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('ordersservices');
     
  }
};
