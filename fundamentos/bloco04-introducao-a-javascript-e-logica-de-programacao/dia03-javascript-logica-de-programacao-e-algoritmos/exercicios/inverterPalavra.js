/* ALGORITMO PARA INVERTER UMA PALAVRA
1- criar a variavel 'word' para receber uma string
2- atribuir a variavel 'word' a palavra 'tryber'
3- criar uma nova variavel (newWord) que vai receber uma string vazia
4- criar um laço de repetição que irá percorrer de trás para frente a string da variavel word
*/
let word = 'tryber'
let newWord = ''
for(let index = word.length - 1; index >= 0; index -= 1) {
    newWord += word[index]
}
console.log(newWord)