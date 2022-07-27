const readline = require('readline-sync');

const calcVelocidade = (distancia, tempo) => {
  console.log(`Distancia: ${distancia}m, Tempo: ${tempo}s`)
  return `${distancia / tempo}m/s`
}

const main = () => {
  const distancia = readline.questionInt('Qual a distancia? (m) ');
  const tempo = readline.questionInt('Quanto tempo foi gasto? (s) ');

  const vm = calcVelocidade(distancia, tempo);
  console.log(`Velocidade média igual a ${vm}`);
};

main();