'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn(
       'employees', 
       'email', 
       { 
         type: Sequelize.STRING,
         allowNull: false,
         unique: true, 
        }
         );
  },

  down: () => {},
};
