/*
03 - Calcular a soma de 1 até 1000
Escreva um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
--------------------------
"A soma de 1 a 1000 é: x."
--------------------------
*/

let soma = 0
for(let index = 0; index <= 1000; index += 1) {
    soma += index
}
console.log('A soma de 1 a mil é:', soma)