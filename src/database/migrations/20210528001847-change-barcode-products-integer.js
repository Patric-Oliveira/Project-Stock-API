'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn(
       'products', 
       'barcode', 
       { 
        type: Sequelize.INTEGER,
        allowNull: false,
        }
         );
  },

  down: () => {},
};
