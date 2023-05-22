const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({data: 'teste123'})
})

app.listen(8080, () => {
    console.log('Server running on port 8080.')
})