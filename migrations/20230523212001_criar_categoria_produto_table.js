/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('categoria_produto', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('categoria_id').unsigned();
        table.bigInteger('produto_id').unsigned();

        table.foreign('categoria_id').references('categorias.id');
        table.foreign('produto_id').references('produtos.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('categoria_produto');
};
