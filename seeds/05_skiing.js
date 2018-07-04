const skiingTools = require('../data/skiing')

exports.seed = function(knex, Promise) {
  return knex('skiing').del()
    .then(function() {
      return knex('skiing').insert(skiingTools)
    })
}