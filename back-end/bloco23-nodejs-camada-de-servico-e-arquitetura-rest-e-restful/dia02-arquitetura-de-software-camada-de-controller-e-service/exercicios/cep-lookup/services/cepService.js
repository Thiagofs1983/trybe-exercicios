const cepModel = require('../models/cepModel');

const findByCep = async (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/
  if (!cepRegex.test(cep)) return [{ "error": { "code": "invalidData", "message": "CEP inválido" } }]
  const findCep = await cepModel.findByCep(cep);
  if (findCep.length === 0) return [{ "error": { "code": "notFound", "message": "CEP não encontrado" } }]
  return findCep;
};

module.exports = {
  findByCep,
}