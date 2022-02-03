let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for (let i = 0; i < numbers.length; i += 1) {
    if (resultado < numbers[i]) {
        resultado = numbers[i]
    }
}
console.log(resultado)