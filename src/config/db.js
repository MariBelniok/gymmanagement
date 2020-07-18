const { Pool } = require('pg')

module.exports = new Pool({
    user:'marianna',
    password: '170681av',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})