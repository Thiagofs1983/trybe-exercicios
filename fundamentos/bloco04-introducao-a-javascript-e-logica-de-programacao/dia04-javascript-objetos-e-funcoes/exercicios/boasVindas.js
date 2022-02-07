let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda ' + info.personagem)
info.recorrente = 'sim'
console.log(info)

for(let index in info) {
    console.log(index)
}

for (let index in info) {
    console.log(info[index])
}

let segundaInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  };
  /* console.log(info.personagem + ' e ' + segundaInfo.personagem)
  console.log(`${info.origem} e ${segundaInfo.origem}`)
  console.log(`${info.nota} e ${segundaInfo.nota}`)
  info.recorrente === 'sim' && segundaInfo.recorrente === 'sim' ? console.log('Ambos recorrentes') : console.log('Um ou mais não é recorrente') */

  for (let itens in info) {
      if(itens === 'recorrente' && info[itens] === 'sim' && segundaInfo[itens] === 'sim') {
          console.log('Ambos recorrentes')
      }else {
          console.log(info[itens], ' e ', segundaInfo[itens])
      }
  }