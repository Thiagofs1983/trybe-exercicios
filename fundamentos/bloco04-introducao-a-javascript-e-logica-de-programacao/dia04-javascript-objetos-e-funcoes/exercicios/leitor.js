let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  let fullName = leitor.nome + ' ' + leitor.sobrenome
  console.log(`O livro favorito de ${fullName} se chama "${leitor.livrosFavoritos[0].titulo}"`)

  leitor.livrosFavoritos.push({
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
  })
  console.log(leitor.livrosFavoritos)

  let livrosFavoritos = leitor.livrosFavoritos.length
  console.log(leitor.nome, 'tem', livrosFavoritos, 'livros favoritos.')