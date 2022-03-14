/* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

  const fullname = (arr) => arr.map((element) => `${element.firstName} ${element.lastName}`)
  console.log(fullname(persons)) */

/*   const numbers = [10, 20, 30, 40];

  const multNumbers = (mult, arr) => arr.map((element) => element * mult)
  console.log(multNumbers(2, numbers)) 
  console.log(multNumbers(5, numbers)) */

/*   const numbers = [1, 2, 3, 4, -5];

  const turnsToNegative = (arr) => arr.map((element) => element > 0 ? element * -1 : element)
  console.log(turnsToNegative(numbers)) */

/* const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const productsPrice = (products, prices) => products.map((element, index) => ({
    [element]: prices[index]
}))
console.log(productsPrice(products, prices)) */

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "59" },
      { name: "Português", nota: "80" },
      { name: "Química", nota: "78" },
      { name: "Biologia", nota: "92" },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "76" },
      { name: "Português", nota: "90" },
      { name: "Química", nota: "70" },
      { name: "Biologia", nota: "80" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "91" },
      { name: "Português", nota: "85" },
      { name: "Química", nota: "92" },
      { name: "Biologia", nota: "90" },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "70" },
      { name: "Português", nota: "70" },
      { name: "Química", nota: "60" },
      { name: "Biologia", nota: "50" },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "80" },
      { name: "Português", nota: "82" },
      { name: "Química", nota: "79" },
      { name: "Biologia", nota: "75" },
    ],
  },
];

/*   const studentsShiftMorning = (arr) => {
      return arr.filter((element) => element.turno === 'Manhã').map((element) => `${element.nome} ${element.sobrenome}`)
  }

  console.log(studentsShiftMorning(estudantes)) */

const findStudent = (arr, name) => {
  const student = arr.find((element) => element.nome === name);
  console.log(name)
  return student.materias.map((element) => element.nota >= 60 ? `${element.name} - APROVADO`
        : `${element.name} - REPROVADO`
    );
};

console.log(findStudent(estudantes, "Maria"));
console.log(findStudent(estudantes, "Natalia"));
