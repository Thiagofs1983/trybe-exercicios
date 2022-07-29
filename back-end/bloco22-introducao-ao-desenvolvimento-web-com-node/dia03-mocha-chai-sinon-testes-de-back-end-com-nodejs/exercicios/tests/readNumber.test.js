const { expect } = require('chai');
const readNumber = require('../readNumer');

describe('verifica se é um número', () => {
  describe('se é número', () => {
    it('retorna "negativo" se menor que zero', () => {
      const result = readNumber(-10);
      expect(result).to.be.equals('negativo');
    });
    it('retorna "positivo" se maior que zero', () => {
      const result = readNumber(10);
      expect(result).to.be.equals('positivo')
    });
    it('retorna "neutro" se igual a zero', () => {
      const result = readNumber(0);
      expect(result).to.be.equals('neutro');
    });
  });
  describe('se não é um número', () =>{
    it('retorna mensagem "deve ser inserido um número" se for diferente de número', () => {
      const result = readNumber('a');
      expect(result).to.be.equals('deve ser inserido um número');
    });
  });
});