/* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  const sortByAge = (arr) => {
      return arr.sort((a, b) => a.age > b.age ? -1 : 1 )
  }
  
  console.log(sortByAge(people)); */

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sortNumbers = (arr) => {
      return arr.sort((a, b) => a - b)
  }
  console.log(sortNumbers(numbers))