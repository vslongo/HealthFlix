'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Emgracimento', position: 1, created_at: new Date(), updated_at: new Date() },
      { name: 'Ganho de Massa Muscular', position: 2, created_at: new Date(), updated_at: new Date() },
      { name: 'Progressão de Carga', position: 3, created_at: new Date(), updated_at: new Date() },
      { name: 'Powerlifting', position: 4, created_at: new Date(), updated_at: new Date() },
      { name: 'Bodybuilding', position: 5, created_at: new Date(), updated_at: new Date() },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};