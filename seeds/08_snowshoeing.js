const snowshoeingTools = require('../data/snowshoeing')

exports.seed = function (knex, Promise) {
  return knex('snowshoeing').del()
    .then(function () {
      return knex('snowshoeing').insert(snowshoeingTools)
    })
}