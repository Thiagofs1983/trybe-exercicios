const express = require('express');

require('express-async-errors');

const validate = require('./middlewares/validate');
const loginController = require('./controllers/loginController');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/login', validate, loginController.login);

app.get('/user/me', auth, loginController.userMe);

app.get('/top-secret', auth, loginController.topSecret);

app.use((err, req, res, next) => {
  console.log(err);
  const { message, status } = err;
  res.status(status).json({ message });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));