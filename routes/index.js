const categoriasRoute = require('../src/modules/categoria/categoria.route');
const produtosRoute = require('../src/modules/produtos/produto.route')

module.exports = (app) => {
    categoriasRoute(app);
    produtosRoute(app);
}