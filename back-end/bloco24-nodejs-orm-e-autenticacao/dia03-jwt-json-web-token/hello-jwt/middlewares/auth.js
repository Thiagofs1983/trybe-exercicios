const jwt = require('jsonwebtoken');
const JWT_SECRET = 'chavesecreta';

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const payload = jwt.verify(authorization, JWT_SECRET);
    req.user = payload;
    return next()
  } catch (error) {
    error.status = 401;
    return next(error);
  }
}

module.exports = auth;