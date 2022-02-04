/*
09 - Incluído nos arrays
Escreva um algoritmo que irá receber dois array a e b, retorne um novo array com os elementos que se repetem em a e b, se não houver elemento repetidos, retorne um array vazio.
Por exemplo:
--------------------------------------------------------------------------------
Entradas:
a = [1, 2, 3 ], b = [4, 2, 4 ]
Saída:
[2]
--------------------------------------------------------------------------------
Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 for's.
*/
let a = [1, 2, 3, 4, 6, 8, 9];
let b = [4, 2, 3, 5, 7, 6, 1];
let c = [];
for(let index = 0; index < a.length; index += 1) {
    for(let secondIndex = 0; secondIndex < b.length; secondIndex += 1){
        if(b[secondIndex] == a[index]) {
            c.push(b[secondIndex])
        }
    }
}
console.log(c)