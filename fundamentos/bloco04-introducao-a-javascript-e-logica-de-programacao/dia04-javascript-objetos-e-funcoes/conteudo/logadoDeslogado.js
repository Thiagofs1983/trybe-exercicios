let status = 'deslogado'

function logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado'
    }else {
        status = 'deslogado'
    }
}
logarDeslogar()
console.log(status)
logarDeslogar()
console.log(status)
logarDeslogar()

console.log('O usuário está ' + status)