const createEmployee = fullname => {
    const email = `${fullname.toLowerCase().replace(/ /g, "_")}@trybe.com`
    return { fullname, email }
}

const newEmployees = callback => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
  };

console.log(newEmployees(createEmployee))