const snowboardingTools = require('../data/snowboarding')

exports.seed = function(knex, Promise) {
  return knex('snowboarding').del()
    .then(function() {
      return knex('snowboarding').insert(snowboardingTools)
    })
}