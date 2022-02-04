/*
08 - Ordem decrescente
Escreva um algoritmo que retorne uma string com os números inteiros do intervalo de 100 a 200 em ordem decrescente.
Exemplo de saída:
-------------
x, y, z ...n.
-------------
*/
let string = '';
for(let index = 200; index >= 100; index -= 1) {
    string += index +', '
}
console.log(string)