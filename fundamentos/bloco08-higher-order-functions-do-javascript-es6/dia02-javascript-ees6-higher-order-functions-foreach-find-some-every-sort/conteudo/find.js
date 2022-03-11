/* const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5); */
// 50

/* const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5); */
// 50

/* const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const numDiv5 = numbers.find((element) => element % 5 === 0)
console.log(numDiv5) */

/* const numbers = [19, 21, 45, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  return number % 5 === 0 && number % 3 === 0
}

const isDivisibleBy3And5 = numbers.find(findDivisibleBy3And5)
console.log(isDivisibleBy3And5)

console.log(findDivisibleBy3And5(30)) */

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  return name.length === 5
}

const nameWithFiveLetters = names.find(findNameWithFiveLetters)

console.log(nameWithFiveLetters)

console.log(findNameWithFiveLetters('Irene')); */

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]

  //console.log(musicas[0].title)
  
  function findMusic(id) {
    const objMusic = musicas.find((musica) => musica.id === id)
    return `Música escolhida é: ${objMusic.title}`
  }
  
  console.log(findMusic('31031687'))