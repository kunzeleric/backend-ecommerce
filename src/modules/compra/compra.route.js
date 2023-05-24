const { 
    storeCompra,
} = require('./compra.model');

const transport = require('../../../config/email');

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
}