import mysql from 'mysql2/promise';
import 'dotenv/config';

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_DATABASE,
} = process.env;

export default mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DATABASE,
})