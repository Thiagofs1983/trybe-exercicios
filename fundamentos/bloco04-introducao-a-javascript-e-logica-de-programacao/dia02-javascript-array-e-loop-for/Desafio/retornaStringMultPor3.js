/*
01 - Mensagem codificada 
Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.
Exemplo:
---------
Entrada:
"Trybe"
Saída:
"036912".
---------
*/
let string = 'Trybe'

for (let index = 0; index < string.length; index += 1) {
    console.log(index * 3)
}


