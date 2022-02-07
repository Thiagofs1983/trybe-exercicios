function inteiroMaisRepete (arrayNumeros) {
    let contadorRepetido = 0
    let contadorNumero = 0
    let indexNumeroRepetido = 0
    for(let index in arrayNumeros) {
        let verirficaNumero = arrayNumeros[index] //recebe o valor armazenado no array
        for(let segundoIndex in arrayNumeros) {
            if(verirficaNumero === arrayNumeros[segundoIndex]) {
                contadorNumero += 1 //se o valor encontrado for igual ao primeiro for vai somar 1 ao contador
            }
        }
        if(contadorNumero > contadorRepetido) {
            contadorRepetido = contadorNumero;
            indexNumeroRepetido = index
        }
        contadorNumero = 0
    }
    return arrayNumeros[indexNumeroRepetido]
}

console.log(inteiroMaisRepete([2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 5, 8, 2, 3]));