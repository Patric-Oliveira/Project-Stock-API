'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn(
       'employees', 
       'cep', 
       { 
         type: Sequelize.STRING(14),
         allowNull: true,
        }
         );
  },

  down: () => {},
};
