'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    await queryInterface.bulkInsert('courses', [
      { name: 'Emagreça Já!', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Massa Muscular Turbo', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Carga em Evolução', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Powerlifting Master', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Bodybuilding Pro', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Transformação Fit', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Segredos do Emagrecimento', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Construa Massa com Estilo', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Progressão de Carga 101', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Potência no Powerlifting', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[2].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Bodybuilding Avançado', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[2].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Estratégias para Emagrecer', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[3].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Maximize sua Massa Muscular', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: categories[4].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Desafio da Progressão', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: categories[4].id, created_at: new Date(), updated_at: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
};