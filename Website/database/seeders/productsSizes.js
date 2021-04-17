'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('products_sizes', [
    {
        size_id: 3,
        product_id: 3
    },
    {
        size_id: 4,
        product_id: 3 
    },
    {
        size_id: 2,
        product_id: 13       
    },
    {
        size_id: 3,
        product_id: 13      
    },
    {
        size_id: 4,
        product_id: 13      
    }
], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('products_sizes', null, {});
  }
};