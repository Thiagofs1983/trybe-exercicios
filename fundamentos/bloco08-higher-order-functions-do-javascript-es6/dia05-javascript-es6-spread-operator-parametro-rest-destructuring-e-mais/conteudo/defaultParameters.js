/* const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined! */

/* const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user
    console.log(`Welcome, ${userDisplay}!`)
}
greeting() */

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting()

console.log(`---------------------------------------`)

const multiply = (number, value = 1) => {
    return number * value
  };
  
  console.log(multiply(8));