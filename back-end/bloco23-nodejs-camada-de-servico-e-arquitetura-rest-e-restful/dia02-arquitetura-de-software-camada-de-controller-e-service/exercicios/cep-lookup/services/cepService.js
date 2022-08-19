const cepModel = require('../models/cepModel');
const Joi = require('joi');

const validateCep = (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/
  if (!cepRegex.test(cep)) {
    const err = new Error('Cep inválido')
    err.code = 'invalidData';
    err.status = 400;
    throw err;
  } 
}

const validateDateCep = (body) => {
  const schema = Joi.object({
    "cep": Joi.string().min(8).required(),
    "logradouro": Joi.string().required(),
    "bairro": Joi.string().required(),
    "localidade": Joi.string().required(),
    "uf": Joi.string().min(2).max(2).min(2).required(),
  })
  const { error, value } = schema.validate(body);
  if (error) {
    const err = error;
    err.code = 'invalidData'
    err.status = 400
    throw err;
  }
  return value;
}

const findIfExists = async (cep) => {
  const findCep = await cepModel.findByCep(cep.cep);
  if (findCep.length !== 0) {
    const err = new Error('CEP já existente');
    err.code = 'alreadyExists';
    err.status = 409;
    throw err;
  }
  
}

const findByCep = async (cep) => {
  const findCep = await cepModel.findByCep(cep);
  if (findCep.length === 0) {
    const err = new Error('Cep não encontrado');
    err.code = 'notFound';
    err.status = 404;
    throw err;
  }
  return findCep;
};

const createCep = async({cep, logradouro, bairro, localidade, uf}) => {
  const newCep = await cepModel.createCep({cep, logradouro, bairro, localidade, uf})
  return newCep;
}

module.exports = {
  findByCep,
  validateCep,
  validateCep,
  validateDateCep,
  findIfExists,
  createCep,
}