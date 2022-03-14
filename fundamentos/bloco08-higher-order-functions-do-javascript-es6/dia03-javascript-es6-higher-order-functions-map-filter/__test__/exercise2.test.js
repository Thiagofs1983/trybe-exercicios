const authorAgeAtRelease = require('../exercicios/exercise2');

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

describe('Teste 2', () => {
    const resultExpected = [
        { author: 'Isaac Asimov', age: 31 },
        { author: 'H. P. Lovecraft', age: 38 },
        { author: 'Stephen King', age: 39 },
        { author: 'George R. R. Martin', age: 43 },
        { author: 'Frank Herbert', age: 45 },
        { author: 'J. R. R. Tolkien', age: 62 }
      ]
    it('Verifica se authorAgeAtRelease é uma função', () => {
        expect(typeof authorAgeAtRelease).toBe('function')
    })
    it('Verifica se o resultado da função retorna o array esperado', () => {
        expect(authorAgeAtRelease(books)).toEqual(resultExpected)
    })
    it('O primeiro objeto ter a chave age = 31', () => {
        expect(authorAgeAtRelease(books)[0].age).toBe(31)
    })
    it('A função retorna um array?', () => {
        expect(Array.isArray(authorAgeAtRelease(books))).toBe(true)
    })
})