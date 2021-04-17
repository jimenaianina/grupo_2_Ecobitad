'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('colors', [
    {
      color_name: 'Lila'
    },
    {
      color_name: 'Verde Musco'
    },
    {
      color_name: 'Azul Francia'
    },
    {
      color_name: 'Amarillo'
    },
    {
      color_name: 'Azul'
    },
    {
      color_name: 'Rojo'
    },
    {
      color_name: 'Blanco'
    },
    {
      color_name: 'Negro'
    },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('colors', null, {});
  }
};
