const express = require('express');
const app = express();
const Authors = require('./models/Author');
const Books = require('./models/Book');


app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();
  res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getByBookId(id);
  if (!book) return res.status(404).json({ message: 'Not Found' })
  res.status(200).json(book);
})

app.get('/books', async (req, res) => {
  const { authorId } = req.query;
  const books = (authorId)
  ? await Books.getByAuthorId(authorId)
  : await Books.getAll();
  res.status(200).json(books);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Books.isValid(title, author_id)) return res.status(400).json({ message: 'Dados invalidos' });
  await Books.createBook(title, author_id);
  res.status(200).json({ message: 'Livro criado com sucesso' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));