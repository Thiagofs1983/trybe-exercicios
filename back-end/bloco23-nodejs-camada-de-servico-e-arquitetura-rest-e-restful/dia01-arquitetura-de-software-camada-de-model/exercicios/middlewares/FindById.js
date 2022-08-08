const rescue = require('express-rescue');
const { getById } = require('../models/User');

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const user = await getById(id);
  if (!user) return res.status(404).json({ message: 'User Not Found' });
  next();
});

module.exports = findById;