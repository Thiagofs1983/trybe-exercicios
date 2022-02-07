function somatorioNumeros(numeros) {
    let soma = 0
    for(let index = 1; index <= numeros; index += 1) {
        soma += index
    }
    return soma
}
console.log(somatorioNumeros(5))