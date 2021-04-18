'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('roles', [
    {
      role_name: 'Admin'
    },
    {
      role_name: 'Contributor'
    },
    {
      role_name: 'Viewer'
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('roles', null, {});
  }
};