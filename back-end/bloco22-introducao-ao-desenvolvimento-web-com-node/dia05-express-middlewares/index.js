require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');
const { validate, infos, validateSaleDate, validateWarrantyPeriod } = require('./middlewares/salesValidateMiddleware');
const generateToken = require('./generateToken');
const fieldsValidate = require('./middlewares/userValidateMiddleware');
const authorization = require('./authorization');

const app = express();

app.use(bodyParser.json());

app.post('/signup',  generateToken, fieldsValidate, (req, res) => {
  const token = req.token;
  req.token = token;
  res.status(201).json({ token });
});

app.post('/sales', authorization, validate, infos, validateSaleDate, validateWarrantyPeriod, (req, res) => {
  res.status(201).json({ 'message': 'Venda cadastrada com sucesso'})  
});

app.use((err, req, res, next) => {
  const { message } = err;
  if (message === 'missing fields') res.status(401).json({ message });
  res.status(400).json({ message });
})

app.listen(3001, () => {
  console.log('escutando a porta 3001');
})