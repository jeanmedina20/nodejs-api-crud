const mysql2 = require('mysql2')

const db = mysql2.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'clinica'
})

module.exports  = db;