const validate = (req, res, next) => {
  const { productName } = req.body;
  if (!productName) throw new Error("O campo productName é obrigatório");
  if (productName.length < 4) return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
  next();
}

const infos = (req, res, next) => {
  const { infos } = req.body;
  if (!infos) return res.status(400).json({ 'message': 'O campo infos é obrigatório' });
  next();
}

const validateSaleDate = (req, res, next) => {
  const { infos: { saleDate } } = req.body;
  if (!saleDate) return res.status(400).json({ 'mesage': 'O campo saleDate é obrigatório' });
  
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(saleDate)) return res.status(400).json({ 'message': 'O campo saleDate não é uma data válida' })
  
  next();
}

const validateWarrantyPeriod = (req, res, next) => {
  const { infos: { warrantyPeriod } } = req.body;
  if (warrantyPeriod === undefined) return res.status(400).json({ 'message': 'O campo warrantyPeriod é obrigatório' });
  if (warrantyPeriod < 1 || warrantyPeriod > 3) return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" })
  next();
}

module.exports = {
  validate,
  infos,
  validateSaleDate,
  validateWarrantyPeriod
};