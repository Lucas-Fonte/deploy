module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'names',
      [
        {
          name: 'ANDREW',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('names', null, {});
  }
};