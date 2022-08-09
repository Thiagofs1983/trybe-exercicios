const connection = require('./connection');

const findByCep = async (cep) => {
  const query = `SELECT * FROM ceps WHERE cep = ?;`
  const [findCep] = await connection.execute(query, [cep]);
  return findCep;
};

module.exports = {
  findByCep,
}