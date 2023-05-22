// Update with your config settings.
const development = require('./config/database')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development,

  staging: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '123',
      database : 'back_ecommerce'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '123',
      database : 'back_ecommerce'
    }
  }

};
