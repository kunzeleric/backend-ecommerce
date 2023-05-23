const knex = require('knex');
const development = require('../config/database');


// garantia que só uma conexão seja utilizada
let connection;
const singleton = () =>{
    if(!connection){
        connection = knex(development);
    }
    return connection;
};

module.exports = singleton();