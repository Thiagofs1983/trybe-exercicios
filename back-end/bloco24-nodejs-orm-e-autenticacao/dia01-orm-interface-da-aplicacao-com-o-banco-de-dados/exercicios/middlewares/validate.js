const Joi = require('joi');

const validate = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    pageQuantity: Joi.number().min(1).required()
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const err = error;
    if (err.message.includes('required')) {
      err.status = 400
    }
    if (err.message.includes('length')) {
      err.status = 401
    }
    throw err;
  }
  next();
}

module.exports = validate;