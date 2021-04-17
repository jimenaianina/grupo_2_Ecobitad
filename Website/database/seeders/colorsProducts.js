'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('colors_products', [
    {
      color_id: 1,
      product_id: 1
    },
    {
      color_id: 2,
      product_id: 1
    },
    {
      color_id: 3,
      product_id: 1
    },
    {
      color_id: 4,
      product_id: 4
    },
    {
      color_id: 5,
      product_id: 4
    },
    {
      color_id: 6,
      product_id: 4
    },
    {
      color_id: 7,
      product_id: 4
    },
    {
      color_id: 8,
      product_id: 4
    }    
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('colors_products', null, {});
  }
};