/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('compras', (table) => {
    table.bigIncrements('id').primary();
    table.string('nome');
    table.string('cpf');
    table.string('endereco');
    table.string('pagamento');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('compras');
};
