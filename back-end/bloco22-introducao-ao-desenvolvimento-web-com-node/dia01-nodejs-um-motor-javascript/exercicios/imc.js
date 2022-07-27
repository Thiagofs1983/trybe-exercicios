const calcImc = (weight, height) => {
  console.log(`Peso: ${weight}kg, Altura: ${height}m`);
  return (weight / Math.pow(height, 2)).toFixed(2);
}

const main = () => {
  const imc = calcImc(80, 1.8);
  console.log(`IMC: ${imc}`);
}

main();