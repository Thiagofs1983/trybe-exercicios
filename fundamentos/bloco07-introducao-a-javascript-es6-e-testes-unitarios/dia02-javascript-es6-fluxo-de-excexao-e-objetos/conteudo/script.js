/* const sum = (a, b) =>
  typeof a !== "number" || typeof b !== "number"
    ? "Os valores devem ser numéricos"
    : a + b;
console.log(sum(2, 3)); */

/* const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
};

console.log(sum(2, 3)); */

/* const verifyIsNumber = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Os valores devem ser numéricos')
    }
};

const sum = (num1, num2) => {
    try {
        verifyIsNumber(num1, num2);
        return num1 + num2
    } catch (error){
    throw error.message;
    }
}

console.log(sum(2, 3)) */


/*   function Carro(){}
  carro1 = new Carro()
  console.log(carro1)
  carro1.color = 'preto'
  carro1.model = 'Fiat'
  console.log(carro1.model);
  console.log(carro1)
  
  carro2 = new Carro()
  carro2.color = 'white'
  carro2.model = 'VW'
  console.log(carro2);
  
  console.log(typeof Carro)
  console.log(typeof carro1)
  console.log(typeof carro2) */

/* function Carro(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
}

const meuCarro = new Carro('Fiat', 'Uno', 2009)
console.log(meuCarro) */


/* const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);

  function Paciente(nome) {
      this.nome = nome
  }
  const paciente1 = new Paciente('Thiago')
  const paciente2 = new Paciente('Barbara')
  paciente1.lastName = 'Fonseca'
  paciente1.fullName = `${paciente1.nome} ${paciente1.lastName}`
  console.log(paciente1, paciente2) */

 /*  const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  /* for(const keys in coolestTvShow){
      console.log(keys)
  } */

  /* console.log(Object.keys(coolestTvShow)) */

  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = student => {
      const arrayOfSkills = Object.keys(student)
      for(const index in arrayOfSkills) {
          console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`)
      }
  }
  console.log('Estudante 1')
  listSkills(student1)
  let students = {}
  /* console.log(Object.values(student1))
  console.log(Object.entries(student1)) */
  Object.assign(students, student1, student2)
  console.log(students)


  const person = {
      name: 'Thiago',
      lastname: 'Fonseca'
  }

  const experiencia = {
      empresa: 'Lear',
      tempoCasa: 20
  }

  const formacao = {
      escola: 'Trybe'
  }

  Object.assign(person, experiencia, formacao)
 /*  console.log(person)
  console.log(Object.keys(person))
  console.log(Object.values(person)) */