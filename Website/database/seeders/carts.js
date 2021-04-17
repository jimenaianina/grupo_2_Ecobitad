'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('carts', [
    {
      user_id: 1,
      cart_total: 1700
    },
    {
        user_id: 2,
        cart_total: 2450
    },
    {
        user_id: 3,
        cart_total: 400
    },
    
], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('carts', null, {});
  }
};