/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('usuarios', (table) => {
        table.string('nome');
        table.string('email');
        table.string('senha');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('usuarios', (table) => {
        table.dropColumn('nome');
        table.dropColumn('email');
        table.dropColumn('senha');
    })
};
