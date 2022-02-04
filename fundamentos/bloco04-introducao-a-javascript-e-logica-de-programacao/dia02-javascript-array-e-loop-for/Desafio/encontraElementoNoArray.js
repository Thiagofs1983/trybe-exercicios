/*
07 - Onde está o elemento?
Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.
Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------
*/
let elemento = 15;
let array = [];
for(let index = 1; index <= 50; index += 1) {
    array.push(index)
}
console.log(array)
let resultado = 0
for(let index = 0; index < array.length; index += 1) {
    if(array[index] == elemento) {
        resultado = index
    }
}
if (resultado == 0) {
    console.log('Elemento não encontrado no Array')
}else {
    console.log(resultado)
}

