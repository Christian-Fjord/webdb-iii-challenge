// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('roles').insert([
    { name: 'student' },
    { name: 'PM' },
    { name: 'TA' },
  ]);
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohort').insert([
        {name: 'WEBPT1'},
        {name: 'WEBPT2'},
        {name: 'WEBPT3'}
      ]);
    });
};
