require('dotenv').config();
const jwt = require('jsonwebtoken');
const knex = require('./service/knex');
const app = require('./src/main')
const autenticadoMiddleware = require('./middleware/autenticacao');

require('./routes')(app)

// rota de teste do servidor
app.get('/health', (req, res) => {
    res.status(200).json({ data: 'Servidor Operacional' })
})

// rota de login
app.post('/login', async (req, res) => {

    if (!req.body.email) {
        return res.status(400).json({ msg: 'Email não recebido.' })
    }

    if (!req.body.senha) {
        return res.status(400).json({ msg: 'Senha não recebida.' })
    }

    //validar se o email existe
    const emailEncontrado = await knex('usuarios')
        .select('*')
        .where('email', req.body.email)
        .first();

    if (!emailEncontrado) {
        return res.status(400).json({ msg: 'Email não encontrado.' })
    }

    //validar se a senha está correta com o email informado
    const senhaValidada = await knex('usuarios')
        .select('*')
        .where('email', req.body.email)
        .where('senha', req.body.senha)
        .first();

    if (!senhaValidada) {
        return res.status(400).json({ msg: 'Usuário ou senha não correspondem.' })
    }
    console.log(senhaValidada);

    //caso tudo esteja OK, criar token de autenticação
    const token = jwt.sign({ id: senhaValidada.id }, process.env.JWT_SECRET);

    return res.status(200).json({
        data: {
            usuario: senhaValidada,
            token,
        }
    })
});

// rota para testar a obtenção do usuario através do token com autenticação do middleware
app.get('/me',autenticadoMiddleware, async (req, res) => {
    res.status(200).json({ data: req.usuario })
})

// rota de validacao do email (teste)
app.get('/email',autenticadoMiddleware, async (req, res) => {
    res.status(200).json({ data: req.usuario.email })
})

app.listen(8080, () => {
    console.log('Server running on port 8080.')
})