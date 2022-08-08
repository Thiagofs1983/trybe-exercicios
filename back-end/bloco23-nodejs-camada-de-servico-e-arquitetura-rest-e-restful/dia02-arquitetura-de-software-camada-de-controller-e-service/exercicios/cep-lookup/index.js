const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: "pong!" })
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));