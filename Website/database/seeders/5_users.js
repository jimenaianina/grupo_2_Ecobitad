'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
    {
      user_name: 'Jimena',
      last_name: 'Flores',
      email: 'jime.ianina@gmail.com',
      age: 27,
      city: 'Quilmes',
      image: 'Jimena.jpg',
      role_id: 1
    },
    {
      user_name: 'Mateo',
      last_name: 'Bou',
      email: 'boumateo12@gmail.com',
      age: 23,
      city: 'Escobar',
      image: 'Mateo.jpg',
      role_id: 1
    },
    {
      user_name: 'Clara',
      last_name: 'Diaz',
      email: 'diazclaramaria@gmail.com',
      age: 36,
      city: 'Vicente Lopez',
      image: 'fotoPerfil1617314645047.jpg',
      role_id: 1,
      
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('users', null, {});
  }
};

