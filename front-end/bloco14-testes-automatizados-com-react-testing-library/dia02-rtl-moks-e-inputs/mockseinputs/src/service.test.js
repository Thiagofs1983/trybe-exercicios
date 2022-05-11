const service = require('./service');

test('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.numAleatorio = jest.fn().mockReturnValue(10);
});