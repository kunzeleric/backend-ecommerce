const { getProduto, getProdutos, storeProduto, updateProduto, deleteProduto } = require('./produto.model');
const autenticadoMiddleware = require('../../../middleware/autenticacao');

module.exports = (app) => {
    app.get('/produtos', async (req, res) => {
        const produtos = await getProdutos();
        const produtosModificados = produtos.map((produto) => {
            return {
                ...produto,
                cor: produto.cor.length ? JSON.parse(produto.cor) : {}
            }
        })
        res.status(200).json({data: produtosModificados})
    })

    app.post('/produtos', autenticadoMiddleware, async (req, res) => {
        const produto = await storeProduto(req.body);
        res.status(200).json({data: produto})
    })

    app.put('/produtos/:id', async (req, res) => {
        const produto = await updateProduto(req.params.id, req.body);
        res.status(200).json({data: produto})
    })

    app.delete('/produtos/:id', async (req, res) => {
        const produto = await deleteProduto(req.params.id);
        res.status(200).json({data: produto})
    })

    app.get('/produtos/:id', async (req, res) => {
        const produto = await getProduto(req.params.id);
        produto.cor = produto.cor.length > 0 ? JSON.parse(produto.cor) : {};
        res.status(200).json({data: produto})
    })
}