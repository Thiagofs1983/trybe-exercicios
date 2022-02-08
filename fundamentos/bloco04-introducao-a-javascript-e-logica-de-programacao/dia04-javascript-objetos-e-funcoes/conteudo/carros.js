let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let desc in car) {
      console.log(desc, car[desc])
  }
  