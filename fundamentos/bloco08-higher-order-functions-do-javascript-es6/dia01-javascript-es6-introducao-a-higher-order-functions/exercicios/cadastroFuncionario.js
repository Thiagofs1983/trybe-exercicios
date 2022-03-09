const createEmployee = fullname => {
    const email = `${fullname.toLowerCase().replace(/ /g, "_")}@trybe.com`
    return { fullname, email}
}

const newEmployees = createEmployee => {
    const employees = {
      id1: createEmployee('Pedro Guerra'),
      id2: createEmployee('Luiza Drumond'),
      id3: createEmployee('Carla Paiva'),
    }
    return employees;
  };

console.log(newEmployees(createEmployee))