const express = require('express');
const { passwordValid, firstNameValid, lastNameValid, emailValid } = require('./middlewares/IsValid')
const { createUser, getAll, getById, update } = require('./models/User');
const findById = require('./middlewares/FindById');

const app = express();

app.use(express.json());

app.post('/user', passwordValid, firstNameValid, lastNameValid, emailValid, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const create = await createUser(firstName, lastName, email, password);
    const result = {
    id: create.insertId,
    firstName,
    lastName,
    email,
  }
  return res.status(201).json(result);    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.get('/user', async (req, res) => {
  try {
    const users = await getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.get('/user/:id', findById, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.put('/user/:id', findById, passwordValid, firstNameValid, lastNameValid, emailValid, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const userEdit = await update(id, firstName, lastName, email, password);
    return res.status(200).json(userEdit);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
})

const PORT = 3001;
app.listen(PORT, () => console.log(`ONLINE na porta ${PORT}`))