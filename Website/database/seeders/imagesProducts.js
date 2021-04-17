'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('images_products', [
    {
        image_id: 1,
        product_id: 2
    },
    {
        image_id: 2,
        product_id: 2
    },
    {
        image_id: 3,
        product_id: 2
    },
    {
        image_id: 4,
        product_id: 1
    },
    {
        image_id: 5,
        product_id: 1
    },
    {
        image_id: 6,
        product_id: 1
    },
    {
        image_id: 7,
        product_id: 3
    },
    {
        image_id: 8,
        product_id: 3
    },
    {
        image_id: 9,
        product_id: 3
    },
    {
        image_id: 10,
        product_id: 4
    },
    {
        image_id: 11,
        product_id: 5
    },
    {
        image_id: 12,
        product_id: 5
    },
    {
        image_id: 13,
        product_id: 6
    },
    {
        image_id: 14,
        product_id: 6
    },
    {
        image_id: 15,
        product_id: 6
    },
    {
        image_id: 16,
        product_id: 7
    },
    {
        image_id: 17,
        product_id: 7
    },
    {
        image_id: 18,
        product_id: 7
    },
    {
        image_id: 19,
        product_id: 8
    },
    {
        image_id: 20,
        product_id: 8
    },
    {
        image_id: 21,
        product_id: 8
    },
    {
        image_id: 22,
        product_id: 9
    },
    {
        image_id: 23,
        product_id: 9
    },
    {
        image_id: 24,
        product_id: 9
    },
    {
        image_id: 25,
        product_id: 10
    },
    {
        image_id: 26,
        product_id: 10
    },
    {
        image_id: 27,
        product_id: 10
    },
    {
        image_id: 28,
        product_id: 11
    },
    {
        image_id: 29,
        product_id: 11
    },
    {
        image_id: 30,
        product_id: 11
    },
    {
        image_id: 31,
        product_id: 12
    },
    {
        image_id: 32,
        product_id: 12
    },
    {
        image_id: 33,
        product_id: 12
    },
    {
        image_id: 34,
        product_id: 13
    },
    {
        image_id: 35,
        product_id: 13
    },
    {
        image_id: 36,
        product_id: 13
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('images_products', null, {});
  }
};
