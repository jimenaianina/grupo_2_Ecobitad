'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('images', [
    {
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
    },
    {
      image_path: 'fotoProducto1615245202140.png'
    },
    {
      image_path: 'botella-meraki-1.png'
    },
    {
      image_path: 'botella meraki fondo.jpg'
    },
    {
      image_path: 'cubiertos-1.png'
    },
    {
      image_path: 'cubiertos-2.png'
    },
    {
      image_path: 'cubiertos-3.png'
    },
    {
      image_path: 'peine de madera.png'
    },
    {
      image_path: 'peine-de-madera-2.png'
    },
    {
      image_path: 'peine-de-madera-3.png'
    },
    {
      image_path: 'sorbete-acero-1.jpg'
    },
    {
      image_path: 'sorbete-acero-2.jpg'
    },
    {
      image_path: 'sorbete-acero-3.jpg'
    },
    {
      image_path: 'shampoo-1.jpg'
    },
    {
      image_path: 'shampoo-2.jpg'
    },
    {
      image_path: 'shampoo-3.jpg'
    },
    {
      image_path: 'rasuradora de acero.png'
    },
    {
      image_path: 'rasuradora-1.png'
    },
    {
      image_path: 'rasuradora-2.png'
    },
    {
      image_path: 'hisopos-1.jpg'
    },
    {
      image_path: 'hisopos-2.jpg'
    },
    {
      image_path: 'hisopos-3.jpg'
    },
    {
      image_path: 'sorbete-bambu-2.jpg'
    },
    {
      image_path: 'sorbete-bambu-1.jpg'
    },
    {
      image_path: 'sorbete-bambu-3.jpg'
    },
    {
      image_path: 'copita-1.jpg'
    },
    {
      image_path: 'copita-2.jpg'
    },
    {
      image_path: 'copita-3.jpg'
    }
], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('images', null, {});
  }
};