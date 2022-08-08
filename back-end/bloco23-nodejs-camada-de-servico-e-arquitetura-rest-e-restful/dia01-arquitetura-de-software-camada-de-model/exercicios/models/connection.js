const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jr@ypt14',
  database: 'users_crud'
})

module.exports = connection;