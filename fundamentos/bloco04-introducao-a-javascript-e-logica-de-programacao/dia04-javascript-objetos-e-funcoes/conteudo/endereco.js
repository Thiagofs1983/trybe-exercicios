let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  console.log(usuario.id)
  console.log(usuario['id'])
  console.log(usuario.email)
  console.log(usuario.infoPessoal.endereco.rua)
  console.log(usuario['infoPessoal']['endereco']['cidade'])

  let bairro = usuario.infoPessoal.endereco.bairro === 'Brooklyn' ? console.log('Morador do Brooklyn') : console.log('Moradia desconhecia')