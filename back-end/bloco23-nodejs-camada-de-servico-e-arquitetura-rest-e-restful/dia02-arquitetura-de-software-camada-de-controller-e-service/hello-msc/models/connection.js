const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jr@ypt14',
  database: 'model_example',
});

module.exports = connection;