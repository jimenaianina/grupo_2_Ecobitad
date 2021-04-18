'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('cart_products', [
    {
        cart_id: 1,
        product_id: 13,
        quantity: 1,
        unit_price: 1700,
    },
    {
        cart_id: 2,
        product_id: 5,
        quantity: 1,
        unit_price: 2450,
    },
    {
        cart_id: 3,
        product_id: 9,
        quantity: 1,
        unit_price: 400,
    }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('cart_products', null, {});
  }
};
