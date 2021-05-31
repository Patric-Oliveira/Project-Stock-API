'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn(
       'employees', 
       'phone', 
       { 
         type: Sequelize.STRING,
         allowNull: false,
        }
         );
  },

  down: () => {},
};
