/* function userInfo() {
    const userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
}
userInfo(); */

if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  //console.log(userAge); // 20

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas


/* const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition */

const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

  const technologies = ['Javascript', 'CSS', 'HTML'];
  technologies.push('React');
  console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]
  
  /* technologies = ['Javascript', 'CSS', 'HTML', 'React']
  console.log(technologies); // Erro */

  // Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

function soma1(a, b) {
    return a + b
}
console.log(soma1(1, 2))

const soma = (a, b) => a + b
console.log(soma(2, 2))

const printName = nome => nome
console.log(printName('Thiago'))

const imprimeNome = () => nome = 'Fonseca'
console.log(imprimeNome())