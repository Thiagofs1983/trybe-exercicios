const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title FROM model_example.books;'
  );
  return books;
}

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;', [authorId]
  )
  return books.map(({ id, title, author_id}) => ({
    id,
    title,
    author_id: authorId,
  }));
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || !(await getByAuthorId(authorId))) return false;
  return true;
}

const createBook = async(title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?,?)'
  connection.execute(query, [title, authorId]);
}

const getByBookId = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title FROM model_example.books WHERE id=?;', [id]
  )
  if(books.length === 0) return null;
  return books.map((book) => book)[0];
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  isValid,
  createBook,
}