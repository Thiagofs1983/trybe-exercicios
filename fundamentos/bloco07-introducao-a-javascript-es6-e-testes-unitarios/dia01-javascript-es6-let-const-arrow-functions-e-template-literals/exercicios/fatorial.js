const fatorial = (num) => {
    let resultado = 1
    for(index = 1; index <= num; index += 1){
        resultado *= index
    }
    return resultado
}
console.log(fatorial(4))

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
