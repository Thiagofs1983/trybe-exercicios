const functionMath = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const result = (num1 + num2) * num3
    if (result < 5000) {
      reject(new Error('Valor muito baixo'));
    }
    if (result >= 5000) {
      resolve(result);
    }
  });
}

/* functionMath(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message))

functionMath(10, 10, 'w')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message))

functionMath(1, 1, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message)) */

const main = async () => {
  /* const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1); */
  const getRandom = () => {
    return Math.floor(Math.random() * 100 + 1);
  }

  const arr = Array.from({length: 3}).map(getRandom)

  /* console.log(num1, num2, num3); */
  
  try {
    const result = await functionMath(...arr);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }  
}

main()
