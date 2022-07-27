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
}

main();