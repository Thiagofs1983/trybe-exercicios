function menorValorArray (array) {
    let menorValor = 0;
    for(let index in array) {
        if(array[index] < array[menorValor]) {
            menorValor = index
        }
    }
    return menorValor
}
console.log(menorValorArray([2, 4, 6, 7, 10, 0, -3]))
console.log(menorValorArray([2, 4, -6, 7, 10, 0, -3]))