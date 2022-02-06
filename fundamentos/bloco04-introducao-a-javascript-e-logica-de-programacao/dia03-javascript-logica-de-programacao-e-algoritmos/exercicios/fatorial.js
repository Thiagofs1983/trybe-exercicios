/* Algoritmo para fatorial
1- criar a variavel para receber o número que quero saber o seu valor fatorial
2- criar variavel para receber a multiplicação feita no loop de repetição
3- criar um laço de repetição que vá de 1 até o numero que desejo saber o fatorial
4- acrescer na variavel fatorial a multiplicação do index pelo numero que está guardado na variavel a cada repetição
5- imprimir no console o valor final da variavel fatorial
*/
let number = 10;
let fatorial = 1;
for(let index = 1; index <= number; index += 1) {
    fatorial *= index
}
console.log(fatorial)