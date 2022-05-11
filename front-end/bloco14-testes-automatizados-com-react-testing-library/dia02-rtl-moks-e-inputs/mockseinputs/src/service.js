const numAleatorio = () => {
  const num = Math.floor(Math.random() * 101)
  return num;
}

module.exports = { numAleatorio };