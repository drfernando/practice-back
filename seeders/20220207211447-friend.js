'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('my_friends', [{
      name: 'Sebastian',
      gender: 'M',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alfredo',
      gender: 'M',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('my_friends', null, {});
  }
};
