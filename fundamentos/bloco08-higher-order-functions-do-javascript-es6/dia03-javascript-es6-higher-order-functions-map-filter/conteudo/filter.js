/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const filterdNumbers = numbers.filter((element) => element % 2 === 0)

console.log(filterdNumbers) */

/* const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

const canNotDrive = (arr) => arr.filter((element) => element.age < 18)
console.log(canNotDrive(objPeople)) */

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudent = (arr, name) => arr.filter((element) => element !== name)
removeStudent(arrayMyStudents, 'Jorge')