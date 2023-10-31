const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: "authenticationDB",
    user: "root",
    password: "root",
    port: "3306"
});

module.exports = connection;

