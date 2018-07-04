const rockClimbingTools = require('../data/rock-climbing')

exports.seed = function(knex, Promise) {
  return knex('rock-climbing').del()
    .then(function () {
      return knex('rock-climbing').insert(rockClimbingTools)
    })
}
