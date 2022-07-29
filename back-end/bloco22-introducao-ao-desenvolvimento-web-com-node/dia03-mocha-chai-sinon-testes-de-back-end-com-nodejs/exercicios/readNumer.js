const readNumber = (number) => {
  switch(true) {
    case number > 0:
      return 'positivo';
      break;
    case number < 0:
      return 'negativo';
      break;
    case number === 0:
      return 'neutro'
      break;
    default:
      return 'deve ser inserido um número'
  };  
};

console.log(readNumber('a'))

module.exports = readNumber;