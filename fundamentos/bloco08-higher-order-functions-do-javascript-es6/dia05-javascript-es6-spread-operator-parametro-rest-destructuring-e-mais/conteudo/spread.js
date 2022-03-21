const carros = ['Gol', 'HB20', 'Focus']
const motos = ['bizz', 'cb300']

const veiculos = [...carros, ...motos]

console.log(veiculos)

const conhecimentos = {
    softSkills: true,
    hardSkills: true,
    trabalho: true
}

const pessoa = {
    nome: 'Thiago',
    idade: 38,
    sexo: 'Masculino'
}

const conhecimentoPessoa = {
    ...pessoa,
    ...conhecimentos
}

console.log(conhecimentoPessoa)

const numbers = [1, 2, 3];

const newArray = [...numbers, 4,5,6, {...pessoa}]
console.log(newArray)
console.log(`-------------------------`)

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
console.log(`-------------------------`)

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
console.log(`-------------------------`)

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
console.log(`-------------------------`)

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mouse', 'computador', 'teclado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
