const express = require('express');
const bearerToken = require('express-bearer-token');
const app = express();

app.use(express.json());
app.use(bearerToken());

module.exports = app;