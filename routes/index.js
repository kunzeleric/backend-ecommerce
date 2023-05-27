const categoriasRoute = require('../src/modules/categoria/categoria.route');
const produtosRoute = require('../src/modules/produtos/produto.route')
const comprasRoute = require('../src/modules/compra/compra.route')

module.exports = (app) => {
    categoriasRoute(app);
    produtosRoute(app);
    comprasRoute(app);
}