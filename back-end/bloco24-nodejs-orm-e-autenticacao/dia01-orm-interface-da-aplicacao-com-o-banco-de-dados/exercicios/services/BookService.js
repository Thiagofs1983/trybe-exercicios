const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const findById = async (id) => {
  const book = await Book.findByPk(id);
  if (book === null) {
    const err = new Error('Book not found');
    err.status = 404;
    throw err;
  }
  return book;
}

const create = async (body) => {
  const book = await Book.create(body);
  return book;
}

module.exports = {
  getAll,
  findById,
  create,
}