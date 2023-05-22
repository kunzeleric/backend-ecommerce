const knex = require('knex');
const development = require('../config/database');

let connection;
const singleton = () =>{
    if(!connection){
        connection = knex(development);
    }
    return connection;
};

module.exports = singleton();