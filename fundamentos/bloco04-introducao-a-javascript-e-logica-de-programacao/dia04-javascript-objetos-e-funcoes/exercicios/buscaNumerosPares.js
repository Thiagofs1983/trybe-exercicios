function arrayOfNumbers(vector) {
  let newArray = [];
  let newVector = vector.slice();
  for (let index of newVector) {
    if (index % 2 === 0) {
      newArray.push(newVector[index]);
    }
  }
  return newArray;
}

console.log(
  arrayOfNumbers([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ])
);

/* let person = {
    name: 'Thiago',
    lastName: 'Eliseu',
    age: 49,, 
    endereco: {
        rua: 'av Nova York',
        number: 60,
        bairro: 'Imbirucu',
        cidade: 'Betim',
        estado: 'MG'
    },
}
console.log(person.endereco.bairro) */
