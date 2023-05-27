const { 
    storeCompra,
} = require('./compra.model');
const transport = require('../../../config/email');
const axios = require('axios');

module.exports = (app) => {
    app.post('/compras', async (req, res) => {
        const compra = await storeCompra(req.body);

        const message = {
            from: "eric@dnc.com",
            to: "lojistas@dnc.com",
            subject: "Nova compra",
            text: "Novos produtos estão sendo comprados",
          };

        await transport.sendMail(message);

        res.status(200).json({ data: compra })
    })


    app.get('/compras/link', async (_, res) => {
        const response = await axios.get('http://localhost:8081');

        res.status(200).json({ data: response.data.data })
    })
}