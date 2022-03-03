const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const outroArray = [89, 1, 39, 7, 15]

// Seu código aqui.
/* oddsAndEvens.sort(function(a, b){
    return a - b
}) */

const ordenaArray = (array) => array.sort((a, b) => a - b)

console.log(`Os números ${ordenaArray(oddsAndEvens).toString()} estão ordenados de forma crescente`);
console.log(`Os números ${ordenaArray(outroArray).toString()} estão ordenados de forma crescente`);
