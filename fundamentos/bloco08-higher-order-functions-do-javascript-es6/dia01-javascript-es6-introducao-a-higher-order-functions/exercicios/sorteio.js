/* 
1 - HOF que retorna o resultado de um sorteio - ok
2 - HOF gera um numero aleatório entre 1 e 5 - ok
3 - HOF recebe como paramentos o numero apostado e uma função - ok
4 - A função checa se o número apostado é igual ao número sorteado - ok
5 - Retorno da HOF deve ser uma string('Tente novamente' ou 'Parabens você ganhou') - ok */

const resultSorteio = (numAposta, numSorteado) => numAposta === numSorteado ? 'Parabéns, você ganhou!' : 'Tente novamente'

const sorteio = (numAposta, callback) => {
    let numAleatorio = Math.floor(Math.random() * 5 + 1)
    console.log(numAleatorio)
    return callback(numAposta, numAleatorio)
}
console.log(sorteio(3, resultSorteio))