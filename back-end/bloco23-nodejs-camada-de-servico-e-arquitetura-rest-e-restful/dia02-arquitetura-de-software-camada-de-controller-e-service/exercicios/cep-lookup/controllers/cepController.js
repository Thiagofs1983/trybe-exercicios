const cepService = require('../services/cepService')

const findByCep = async (req, res) => {
  const { cep } = req.params;
  const [findCep] = await cepService.findByCep(cep);
  if (findCep.error) {
    if (findCep.error.code === 'invalidData') return res.status(400).json(findCep);
    if (findCep.error.code === 'notFound') return res.status(404).json(findCep);
  }
  return res.status(200).json(findCep);
};

module.exports = {
  findByCep,
}