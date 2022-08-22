const express = require('express');

const jwt = require('jsonwebtoken');

const secret = 'meusecretdetoken'

const app = express();

app.use(express.json());

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  try {
    const payload = jwt.verify(token, secret);
    req.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Usuário não autorizado' });
  }
}

app.post('/login', (req, res) => {
  if (req.body.user === 'Thiago' && req.body.password === '123') {
    const token = jwt.sign({ userId: 1 }, secret, { expiresIn: 300 });
    return res.json({ auth: true, token });
  }
  res.statusCode(401).end();
})

app.get('/', (req, res) => {
  res.json({ message: 'Funcionando normalmente' });
});

app.get('/clients', verifyToken, (req, res) => {
  res.json([{ id:1, name: 'Thiago' }]);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));