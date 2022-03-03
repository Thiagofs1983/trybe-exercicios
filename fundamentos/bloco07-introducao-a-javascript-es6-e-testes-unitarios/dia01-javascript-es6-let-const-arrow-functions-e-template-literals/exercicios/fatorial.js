/* const fatorial = (num) => {
    let resultado = 1
    for(index = 1; index <= num; index += 1){
        resultado *= index
    }
    return resultado
}
console.log(fatorial(4))

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaArray = array => array.sort((a, b) => a - b)

console.log(`Números ${ordenaArray(oddsAndEvens).toString()} estão em ordem alfabética`); 

const fatorial = num => num > 1 ? num * (fatorial(num - 1)) : 1;
console.log(fatorial(4))
