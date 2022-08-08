const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
  const [createUser] = await connection.execute(query, [firstName, lastName, email, password]);
  return createUser;
}

const getAll = async () => {
  const query = 'SELECT * FROM users_crud.users;';
  const [users] = await connection.execute(query);
  const user = users.map((u) => ({
    id: u.id,
    firstName: u.first_name,
    lastName: u.last_name,
    email: u.email,
    password: u.password,
  }))
  return user;
}

const getById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';
  const [user] = await connection.execute(query, [id]);
  return user[0];
}

const update = async (id, firstName, lastName, email, password) => {
  const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? ';
  await connection.execute(query, [firstName, lastName, email, password, id]);
  const userEdit = {
    id,
    firstName,
    lastName,
    email,
  }
  return userEdit
}

module.exports = {
  createUser,
  getAll,
  getById,
  update,
}

