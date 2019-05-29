exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Joe', cohort_id: 1},
        {name: 'Christian', cohort_id: 3},
        {name: 'Reyaad', cohort_id: 3}
      ]);
    });
};