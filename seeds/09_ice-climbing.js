const iceClimbingTools = require('../data/ice-climbing')

exports.seed = function(knex, Promise) {
  return knex('ice-climbing').del()
    .then(function () {
      return knex('ice-climbing').insert(iceClimbingTools)
    })
}