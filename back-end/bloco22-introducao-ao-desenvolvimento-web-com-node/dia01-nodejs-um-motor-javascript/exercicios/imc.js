const readline = require('readline-sync');

const calcImc = (weight, height) => {
  console.log(`Peso: ${weight}kg, Altura: ${height / 100}m`);
  return (weight / Math.pow(height / 100, 2));
}

const main = () => {
  const weight = readline.questionFloat('Qual é o seu peso? (kg) ');
  const height = readline.questionInt('Qual a sua altura? (cm) ');

  const imc = calcImc(weight, height);

  console.log(`IMC: ${imc.toFixed(2)}`);

  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza');
  } if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal');
  } if (imc >= 24.9 && imc < 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } if (imc >= 29.9 && imc < 34.9) {
    console.log('Obesidade grau I');
  } if (imc >= 34.9 && imc < 39.9) {
    console.log('Obesidade grau II');
  } if (imc >= 39.9) {
    console.log('Obesidade graus III e IV');
  }
}

main();