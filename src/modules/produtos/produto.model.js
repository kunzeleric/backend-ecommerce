const knex = require('../../../service/knex');

const TABLE = 'produtos';

const getProdutos = async () => {
    return await knex(TABLE).select('*');
}

const getProduto = async (id) => {
    return await knex(TABLE)
        .select('*')
        .where('id', id)
        .first();
}

const storeProduto = async (params) => {
    return await knex(TABLE)
        .insert(params);
}

const updateProduto = async (id, params) => {
    return await knex(TABLE)
        .where('id', id)
        .update(params);
}

const deleteProduto = async (id) => {
    return await knex(TABLE)
        .where('id', id)
        .delete()
}

module.exports = { getProdutos, getProduto, storeProduto, updateProduto, deleteProduto}