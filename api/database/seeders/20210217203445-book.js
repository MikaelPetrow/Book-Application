'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('book', [
      {
        title: 'Book 1',
        author: 'Author 1',
        description: 'This is the desctiption for Book 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        description: 'This is the desctiption for Book 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('book', null, {});
  }
};
