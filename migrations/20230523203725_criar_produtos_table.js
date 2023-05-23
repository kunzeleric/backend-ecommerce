/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('produtos', (table) => {
        table.bigIncrements('id').primary();
        table.string('nome');
        table.integer('valor');
        table.text('cor');
        table.string('descricao');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
