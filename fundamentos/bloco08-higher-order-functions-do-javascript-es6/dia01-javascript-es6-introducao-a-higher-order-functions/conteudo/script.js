/* const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello); */

/*   const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5)); */

/*   const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(10, isEven); // Testa quais números serão pares;
  repeat(10, isOdd); // Testa quais números serão ímpares; */

  /* const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator()); */

/*   const sum = (a, b) => a + b;
  const sub = (a, b) => a - b === 5 ? 'Deu certo, o resultado é 5' : 'Deu errado';

  const calculator = (func) => func(10, 5);
  console.log(calculator(sum));
  console.log(calculator(sub)); */

const acordar = () => 'Acordando'
const cafe = () => 'Bora tomar café'
const dormir = () => 'Partiu dormir'

const doigThings = (func) => func()

console.log(doigThings(acordar))
console.log(doigThings(cafe))
console.log(doigThings(dormir))