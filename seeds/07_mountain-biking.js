const mountainBikingTools = require('../data/mountain-biking')

exports.seed = function(knex, Promise) {
  return knex('mountain-biking').del()
    .then(function() {
      return knex('mountain-biking').insert(mountainBikingTools)
    })
}