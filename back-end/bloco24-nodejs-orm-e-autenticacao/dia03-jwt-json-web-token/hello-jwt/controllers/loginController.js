const jwt = require('jsonwebtoken');
const JWT_SECRET = 'chavesecreta';


const login = (req, res) => {
  const { username, password } = req.body;
  const payload = { username, admin: false };
  if (username === 'Thiago' && password === '12345') {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 });
    req.user = username;
    return res.status(200).json({ token });
  }
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    payload.admin = true;
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    req.user = username;
    console.log('token admin');
    return res.status(200).json({ token });
  }
  return res.status(401).json({ message: 'User Not Found' })
}

const userMe = (req, res) => {
  const {username} = req.user;
  if (username === 'admin') return res.status(200).json({username, admin: true});
  return res.status(200).json({username, admin: false});
}

const topSecret = (req, res) => {
  const secret = req.user.admin;
  if (secret === false) {
    return res.status(403).json({ error: { message: 'Restricted access' } })
  }
  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem Aranha' })
}

module.exports = { login, userMe, topSecret };