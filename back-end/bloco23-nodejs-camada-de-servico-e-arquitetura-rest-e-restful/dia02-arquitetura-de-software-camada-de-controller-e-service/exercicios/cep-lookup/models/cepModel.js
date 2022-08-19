const connection = require('./connection');

const findByCep = async (cep) => {
  const query = `SELECT * FROM ceps WHERE cep = ?;`
  const [findCep] = await connection.execute(query, [cep]);
  return findCep;
};

const createCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  const query = `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
  VALUES (?, ?, ?, ?, ?);`
  const [create] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf])
  return create;
}

module.exports = {
  findByCep,
  createCep,
}