const hikingTools = require('../data/hiking')

exports.seed = function(knex, Promise) {
  return knex('hiking').del()
    .then(function () {
      return knex('hiking').insert(hikingTools)
    })
}
