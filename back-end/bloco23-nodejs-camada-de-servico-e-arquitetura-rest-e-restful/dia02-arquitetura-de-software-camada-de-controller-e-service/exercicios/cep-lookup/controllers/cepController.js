const cepService = require('../services/cepService')

const findByCep = async (req, res) => {
  const { cep } = req.params;
  cepService.validateCep(cep);
  const [findCep] = await cepService.findByCep(cep);
  return res.status(200).json(findCep);
}

const createCep = async (req, res) => {
  const cepBody = req.body;
  cepService.validateDateCep(cepBody);
  await cepService.findIfExists(cepBody);
  await cepService.createCep(cepBody);
  return res.status(201).json(cepBody);
}

module.exports = {
  findByCep,
  createCep,
}