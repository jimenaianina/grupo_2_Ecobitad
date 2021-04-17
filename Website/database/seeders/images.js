'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('images', [{
      image_path: 'acondicionador-solido-1.jpg'
    },
    {
      image_path: 'acondicionador-solido-2.jpg'
    },
    {
      image_path: 'acondicionador-solido-3.jpg'
    },
    {
      image_path: 'fotoProducto1615251940320.jpeg',
    },
    {
      image_path: 'fotoProducto1615251940323.jpg'
    },
    {
      image_path: 'fotoProducto1615251940324.jpg'
    },
    {
      image_path: 'jabonera-1.jpg'
    },
    {
      image_path: 'jabonera-2.jpg'
    },
    {
      image_path: 'jabonera-3.jpg'
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('images', null, {});
  }
};