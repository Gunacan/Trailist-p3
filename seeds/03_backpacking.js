const backpackingTools = require('../data/backpacking')

exports.seed = function(knex, Promise) {
  return knex('backpacking').del()
    .then(function () {
      return knex('backpacking').insert(backpackingTools)
    })
}
