/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

console.log(product.name)

const { name, seller } = product
console.log(name)
console.log(seller)

console.log(`------------------------------`) */

// definindo o objeto
/* const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

  console.log(`-----------------------------------------`)

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

  const { workDays, weekend } = daysOfWeek

  const newArray = [...workDays, ...weekend]
  console.log(newArray)
  console.log(`-----------------------------------------`)

  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

  const { a: nome, b: classe, c: aula } = student
  console.log(nome)
  console.log(classe)
  console.log(aula)

  console.log(`----------------------------------`)

  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
 */
  console.log(`----------------------------------`)


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const phrase = ({ name, age, nationality }, { profession, squad, squadInitials}) => {
      return `Oi, meu nome é ${name}, tenho ${age} anos e sou ${nationality}. Eu trabalho de ${profession} e minha squad é ${squadInitials}-${squad}.`
  }
  console.log(phrase(user, jobInfos))