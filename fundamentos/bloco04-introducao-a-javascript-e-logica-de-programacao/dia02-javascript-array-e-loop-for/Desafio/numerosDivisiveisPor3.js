/*

05 - Números divisíveis por 3
Escreva um algoritmo que recebe o inicio e o fim de uma sequência de números inteiros de razão 1.
Conte a quantidade de números da sequência que são diviseis por 3 e considere:
Se houver 50 ou mais retorne:
---------------------------------------
"Há 50 ou mais números diviseis por 3."
Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------
*/
let numbers = [];
for(let index = 1; index < 200; index += 1) {
    numbers.push(index)
}
let soma = 0
for(index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 3 == 0) {
        soma += 1
    }
}
//console.log(soma)
if(soma >= 50) {
    console.log('Há 50 ou mais números divisiveis por 3')
}else {
    console.log('Sequência muito pequena')
}