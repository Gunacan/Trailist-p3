exports.up = function(knex, Promise) {
    return knex.schema.createTable('hiking', (table) => {
        table.increments()
        table.text('name')
        table.boolean('must_have')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('hiking')
}