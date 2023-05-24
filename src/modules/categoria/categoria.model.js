const knex = require('../../../service/knex');

const TABLE = 'categorias';

const getCategorias = async () => {
    return await knex(TABLE).select('*');
}

const getCategoria = async (id) => {
    return await knex(TABLE)
        .select('*')
        .where('id', id)
        .first();
}

const storeCategoria = async (params) => {
    return await knex(TABLE)
        .insert(params);
}

const updateCategoria = async (id, params) => {
    return await knex(TABLE)
        .where('id', id)
        .update(params);
}

const deleteCategoria = async (id) => {
    return await knex(TABLE)
        .where('id', id)
        .delete()
}


const storeProdutoCategoria = async (params) => {
    return await knex('categoria_produto')
        .insert(params);
}

const getCategoriaProdutos = async (id) => {
    return await knex('categoria_produto')
        .where('categoria_produto.categoria_id', id)
        .innerJoin('produtos', 'produtos.id', 'categoria_produto.produto_id')
        .select('*')

}

module.exports = { 
    getCategorias, 
    getCategoria, 
    storeCategoria, 
    updateCategoria, 
    deleteCategoria, 
    storeProdutoCategoria, 
    getCategoriaProdutos 
}