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

/* 
1 - Construir um array de objetos a partir do array livros
2 - Cada objeto deve conter a propriedade author com o nome da pessoa autora do livro
3 - Cada objeto deve conter a propriedade age com a idade da pessoa autora quando o livro foi lançado
4 - O array deve ser ordenado por idade considerando a idade quando o livro foi lançado */

const authorAgeAtRelease = (arr) => {
  const authorAge = arr.map((element) => ({
    author: element.author.name,
    age: element.releaseYear - element.author.birthYear
  }))
  return authorAge.sort((a, b) => a.age - b.age)
}

//console.log(authorAgeAtRelease(books))

module.exports = authorAgeAtRelease