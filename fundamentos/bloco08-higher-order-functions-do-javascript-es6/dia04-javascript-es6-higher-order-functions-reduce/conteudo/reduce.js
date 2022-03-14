/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((acc, crr) => acc + crr)
console.log(sumNumbers) */

/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
  const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
  console.log(sumNumbers); // 113 */

/*   const numbers = [32, 15, 3, 2, -5, 56, 10];
  
  const getSum = (acc, crr) => acc + crr
  
  const sumNumbers = numbers.reduce(getSum, 0) //Com o paramêtro 0, ele considera que o acumulador começa em zero e não no primeiro elemento do array
  console.log(sumNumbers) */

  /* const numbers = [50, 85, -30, 3, 15];
  let acc = 0
  for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > acc) {
        acc = numbers[index]
    }
  }
  console.log(acc)

  const pegaMaiorValor = (acumulador, valor) => acumulador > valor ? acumulador : valor;

  const maiorValor = numbers.reduce(pegaMaiorValor, 0)
  console.log(maiorValor) */

  //const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

  /* const getPares = (acc, crr) => {
    if (crr % 2 === 0) {
      acc += crr
    }
    return acc
  } */ 

/*   const pegaValoresPares = (event) => event % 2 === 0
  const somaValoresPares = (acc, crr) => acc + crr

  const somaPares = numbers.filter(pegaValoresPares).reduce(somaValoresPares, 0)
  console.log(somaPares) */

/*   const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const bestSubject = (acc, crr) => acc.nota > crr.nota ? acc : crr;
  
  const reportBest = () => estudantes.map(element => ({
      nome: element.nome,
      materia: element.materias.reduce(bestSubject).name,
      //nota: element.materias.reduce(bestSubject).nota
  }))
  console.log(reportBest()) */

  const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

  const getPares = (element) => element % 2 === 0;
  const getImpares = (element) => element % 2 === 1;
  const getSum = (acc, cur) => acc + cur

  console.log(`Números pares: ${numbers.filter(getPares)}`)
  console.log(numbers.filter(getImpares))
  console.log(numbers.filter(getPares).reduce(getSum, 0));
  console.log(numbers.filter(getImpares).reduce(getSum, 0));
  console.log(numbers.reduce(getSum, 0));

  // Juntar um array de strings
  const meuNome = ['Thiago', 'Fonseca', 'de', 'Souza']
  const juntaNome = meuNome.reduce((acc, cur) => `${acc} ${cur}`)
  console.log(juntaNome)
  
  const email = `${juntaNome.replace(/ /g, '').toLowerCase()}@hotmail.com`;
  console.log(email)

  //criar chave de forma dinâmica partindo de um objeto com acumulator[] = valor; 

