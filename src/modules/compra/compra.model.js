const knex = require('../../../service/knex');

const TABLE = 'compras'

const storeCompra = async (params) => {
    return await knex(TABLE).insert(params);
}

module.exports = { storeCompra }