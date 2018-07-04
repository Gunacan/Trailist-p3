const campingTools = require('../data/camping')

exports.seed = function(knex, Promise) {
  return knex('camping').del()
    .then(function () {
      return knex('camping').insert(campingTools);
    })
}
