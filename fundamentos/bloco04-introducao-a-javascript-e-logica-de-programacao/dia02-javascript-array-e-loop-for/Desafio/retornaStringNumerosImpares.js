/*
06 - Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/
let string = '';
for(let index = 1; index <= 50; index += 1) {
    if(index % 2 !== 0) {
        string += index + ', '
    }
}
console.log(string)