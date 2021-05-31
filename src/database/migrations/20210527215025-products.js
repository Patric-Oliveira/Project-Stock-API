'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      activate_product: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      name_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sku_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      barcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      in_stock: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      long_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      short_description: {
        type: Sequelize.STRING,
        allowNull: true,
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
    
    await queryInterface.dropTable('products');
     
  }
};
