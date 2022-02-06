let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};
let infoBanco = 'banco';
console.log(conta[infoBanco])
console.log(conta[infoBanco]['nome'])

console.log(conta.agencia)
console.log(conta['agencia'])

console.log(conta.banco.cod)
console.log(conta['banco']['id'])