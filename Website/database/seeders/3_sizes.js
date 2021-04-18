'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('sizes', [
    {
      size_name: 'X-Small'
    },
    {
      size_name: 'Small'
    },
    {
      size_name: 'Medium'
    },
    {
      size_name: 'Large'
    },
    {
      size_name: 'X-Large'
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('sizes', null, {});
  }
};