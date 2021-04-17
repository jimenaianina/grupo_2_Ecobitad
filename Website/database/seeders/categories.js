'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('categories', [
    {
    category_name: 'Baño'
    },
    {
    category_name: 'On the Go'
    },
    {
      category_name: 'Cocina'
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('categories', null, {});
  }
};
