const readline = require('readline-sync');

const jogoAdivinhacao = (palpite, resposta) => {
  console.log(`Seu palpite foi ${palpite}`);
  if (palpite === resposta) {
    return console.log('Parabéns, número correto');
  } else {
    return console.log(`Opa, não foi dessa vez. O número sorteado era ${resposta}`);
  }
}

const main = () => {
  const palpite = readline.questionInt('Dê o seu palpite de 1 a 10 ');
  const resposta = Math.floor(Math.random() * 10 + 1);

  jogoAdivinhacao(palpite, resposta);
  
  const novamente = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ',
  );

  if (novamente !== 's') {
    return console.log('Ok! Até a próxima...');
  } else {
    main();
  }
}

main();