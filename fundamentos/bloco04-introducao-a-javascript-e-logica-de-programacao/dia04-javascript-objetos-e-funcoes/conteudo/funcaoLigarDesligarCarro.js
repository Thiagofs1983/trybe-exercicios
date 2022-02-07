let statusCarro = 'desligado'
let aceleracao = 0
let rotacaoDoVolante = 0
function ligarDesligar() {
    if(statusCarro === 'desligado') {
        statusCarro = 'ligado'
    }else {
        statusCarro = 'desligado'
    }
    return statusCarro
}

function acelerar(incremento) {
    aceleracao += incremento
    return 'Acelerando a ' + aceleracao + 'm/s²'
}

function frear(decremento) {
    aceleracao -= decremento
    return 'Desacelerando para ' + aceleracao + 'm/s²'
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao
    return rotacaoDoVolante + 'º'
}

// fazer no browser
console.log(girarVolante(45))