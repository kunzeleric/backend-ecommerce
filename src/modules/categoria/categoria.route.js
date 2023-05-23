const { 
    getCategoria,
    getCategorias, 
    storeCategoria, 
    updateCategoria, 
    deleteCategoria, 
    storeProdutoCategoria 
} = require('./categoria.model');

module.exports = (app) => {
    app.get('/categorias', async (req, res) => {
        const categorias = await getCategorias();
        res.status(200).json({ data: categorias })
    })

    app.post('/categorias', async (req, res) => {
        const categoria = await storeCategoria(req.body);
        res.status(200).json({ data: categoria })
    })

    app.put('/categorias/:id', async (req, res) => {
        const categoria = await updateCategoria(req.params.id, req.body);
        res.status(200).json({ data: categoria })
    })

    app.delete('/categorias/:id', async (req, res) => {
        const categoria = await deleteCategoria(req.params.id);
        res.status(200).json({ data: categoria })
    })

    app.get('/categorias/:id', async (req, res) => {
        const categoria = await getCategoria(req.params.id);
        res.status(200).json({ data: categoria })
    })

    app.post('/categorias/produto', async (req, res) => {
        const categoria = await storeProdutoCategoria(req.body);
        res.status(200).json({ data: categoria })
    })
}