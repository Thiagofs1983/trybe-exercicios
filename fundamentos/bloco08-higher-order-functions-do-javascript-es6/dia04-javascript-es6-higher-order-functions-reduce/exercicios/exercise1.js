const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    //return arrays.reduce((acc, crr) => acc.concat(crr)) 
    return arrays.reduce((acc, cur) => `${acc}, ${cur}`)
  }
  console.log(flatten())