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
    await queryInterface.bulkInsert('Users', [{
      username: 'John Doe',
      email: 'phucbdev@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'John Doe1',
      email: 'phucbdev1@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'John Doe2',
      email: 'phucbdev2@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
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
