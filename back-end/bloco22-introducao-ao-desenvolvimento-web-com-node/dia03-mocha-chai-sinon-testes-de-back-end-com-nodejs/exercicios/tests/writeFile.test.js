const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const writeFile = require('../writeFile');

describe('executa a função writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });
  after(() => {
    fs.writeFile.restore();
  });
  describe('a resposta', () => {
    it('é uma string', () => {
      const result = writeFile('arquivo.txt', 'texto escrito no arquivo');
      expect(result).to.be.a('string');
    });
    it('é igual a "OK"', () => {
      const result = writeFile('arquivo.txt', 'texto escrito no arquivo');
      expect(result).to.be.equals('OK');
    });
  });
});