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
    await queryInterface.bulkInsert('Group', [
      {
        name: 'Dev',
        description: "Developer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manager',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Customer',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leader',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
