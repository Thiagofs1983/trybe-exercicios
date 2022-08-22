const Joi = require('joi');

const validate = (req, res, next) => {
    const user = req.body;
    const schema = Joi.object({
      username: Joi.string().min(5).required(),
      password: Joi.string().min(5).required()
    });
  
    const { error } = schema.validate(user)
    if (error) {
      const err = error;
      if (err.message.includes('required')) {
        err.status = 400;
      }
      if (err.message.includes('length')) {
        err.status = 422;
      }
      throw err;
    }
    next();
  }

  module.exports = validate;