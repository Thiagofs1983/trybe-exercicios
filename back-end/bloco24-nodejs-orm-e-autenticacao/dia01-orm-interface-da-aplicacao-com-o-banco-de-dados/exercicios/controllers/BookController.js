const bookService = require('../services/BookService');

const getAll = async (req, res) => {
  try {
    const books = await bookService.getAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Erro de servidor' });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.findById(id);
  res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  await bookService.create({ title, author, pageQuantity });
  res.status(201).json({ message: `Livro ${title} criado com sucesso` });
}

module.exports = {
  getAll,
  findById,
  create,
}