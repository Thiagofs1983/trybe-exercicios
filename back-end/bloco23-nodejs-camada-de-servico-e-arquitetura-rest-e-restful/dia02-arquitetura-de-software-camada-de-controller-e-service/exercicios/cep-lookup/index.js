const express = require('express');
require('express-async-errors');
require('dotenv').config();
const cepRouter = require('./routers/cepRouter');

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use('/cep', cepRouter);

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: "pong!" })
});

app.use((err, req, res, next) => {
  const { message, code, status } = err;
  res.status(status).json({ "error": { code, message } });
})

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));