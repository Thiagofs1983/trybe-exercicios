/*
04 - Escreva um nome N vezes
Escreva um algoritmo usando a estrutura "FOR" que irá receber um nome e a quantidade de vezes que o mesmo deve ser repetido e retorná-lo.
Por exemplo:
-------------------------------
Entradas:
"João", 5
Saída:
"João, João, João, João, João."
-------------------------------
*/
let name = 'João'
let repeticoes = 5

for(let index = 1; index <= repeticoes; index += 1) {
    console.log(name)
}