const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const knex = require('./service/knex')

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({data: 'Servidor Operacional'})
})

app.post('/login', async (req, res) => {

    if(!req.body.email){
        return res.status(400).json({msg: 'Email não recebido.'})
    }

    if(!req.body.senha){
        return res.status(400).json({msg: 'Senha não recebida.'})
    }

    const usuarios = await knex('usuarios').select('*');

    //validar se o email existe

    //validar se a senha está correta com o email informado

    //caso tudo esteja OK, criar token de autenticação

    return res.status(200).json({data: usuarios})
})

app.listen(8080, () => {
    console.log('Server running on port 8080.')
})