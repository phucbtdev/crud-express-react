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
    await queryInterface.bulkInsert('Role', [
      {
        url: '/users/read',
        description: "Read user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/users/create',
        description: "Create user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/users/delete',
        description: "Create user",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
