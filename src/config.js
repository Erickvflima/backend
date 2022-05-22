require('dotenv').config()
module.exports = {

  config: {
    
    server: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,

    connectionTimeout: 300000,
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    },

    options: {
        port: process.env.PORT,
        database: process.env.DATABASE 
      }
} 


}
