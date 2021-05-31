'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn(
       'employees', 
       'cpf', 
       { 
         type: Sequelize.STRING,
         allowNull: true,
        }
         );
  },

  down: () => {},
};
