const express = require('express');
require('dotenv').config();
require('express-async-errors');
const bookController = require('./controllers/BookController');
const validate = require('./middlewares/validate');

const app = express();

app.use(express.json());

app.get('/books', bookController.getAll);

app.get('/books/:id', bookController.findById);

app.post('/books', validate, bookController.create);

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status).json({ message });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));