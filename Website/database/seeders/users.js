'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
    {
    user_name: 'Jimena',
    last_name: 'Flores',
    email: 'jime.ianina@gmail.com',
    age: '27',
    city: 'Quilmes',
    image: 'Jimena.jpg',
    user_role_id: ''
    },
    {
    user_name: 'Mateo',
    last_name: 'Bou',
    email: 'boumateo12@gmail.com',
    age: '23',
    city: 'Escobar',
    image: 'Mateo.jpg',
    user_role_id: ''
    },
    {
    user_name: 'Clara',
    last_name: 'Diaz',
    email: 'diazclaramaria@gmail.com',
    age: '36',
    city: 'Vicente Lopez',
    image: 'fotoPerfil1617314645047.jpg',
    user_role_id: ''
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('users', null, {});
  }
};

