const mysql = require('mysql2');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: 'Jr@ypt14',
  database: process.env.MYSQL_DB_NAME,
});

module.exports = connection;