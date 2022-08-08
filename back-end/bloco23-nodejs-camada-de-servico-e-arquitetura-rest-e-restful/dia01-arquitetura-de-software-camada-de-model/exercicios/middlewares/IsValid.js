const passwordValid = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório'})
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'Campo "password" deve ter no mínimo 6 caracteres' })
  }
  next();
}

const firstNameValid = (req, res, next) => {
  const { firstName } = req.body;
  if (!firstName) return res.status(400).json({ message: 'O campo "firstName" é obrigatório' })
  next();
}

const lastNameValid = (req, res, next) => {
  const { lastName } = req.body;
  if (!lastName) return res.status(400).json({ message: 'O campo "lastName" é obrigatório' })
  next();
}

const emailValid = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' })
  if (!emailRegex.test(email)) return res.status(400).json({ message: 'Campo "email" no formato incorreto'})
  next();
}

module.exports = {
  passwordValid,
  firstNameValid,
  lastNameValid,
  emailValid,
}