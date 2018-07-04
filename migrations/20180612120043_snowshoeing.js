exports.up = function(knex, Promise) {
    return knex.schema.createTable('snowshoeing', (table) => {
        table.increments()
        table.text('name')
        table.boolean('must_have')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('snowshoeing')
}