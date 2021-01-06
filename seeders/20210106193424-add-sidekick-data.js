'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('Sidekicks', [
    {
      name: 'Steve',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Joker',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Uncle Ben',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Grogu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Sidekicks');
  }
};
