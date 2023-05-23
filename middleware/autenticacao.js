const jwt = require('jsonwebtoken');
const knex = require('../service/knex');

// autenticação do usuário
const autenticacao = async (req, res, next) => {
    if (!req.token) {
        return res.status(404).json({ msg: 'Token não encontrado.' })
    }

    // verificação do token informado
    try {
        const usuarioId = jwt.verify(req.token, process.env.JWT_SECRET);
        // conexão com banco de dados para buscar usuário do token informado
        const usuario = await knex('usuarios')
            .where('id', usuarioId.id)
            .select('*')
            .first();

        req.usuario = usuario;

        next();
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ msg: 'Token inválido.' })
    }
}

module.exports = autenticacao;