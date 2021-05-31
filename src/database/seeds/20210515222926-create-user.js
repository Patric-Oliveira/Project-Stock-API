'use strict';

const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users', 
      [
        {
       name: 'John Doe',
       email: 'john@gmail.com',
       password_hash: await bcryptjs.hash('123456', 8),
       created_at: new Date(),
       updated_at: new Date(),
      },
      {
        name: 'Doeds',
        email: 'doeds@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
       },
    ], 
      {},
      );
  },

  down: async () => {},
};
