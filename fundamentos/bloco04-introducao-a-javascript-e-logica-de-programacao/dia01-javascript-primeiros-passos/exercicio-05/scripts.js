let notas = [40, 50, 60, 80]

let statusAprovacao = notas[Math.floor(Math.random() * 4)];
console.log(statusAprovacao)

switch (statusAprovacao) {
    case 80:
        console.log("Parabéns, você foi aprovado!")
        break
    case 60:
        console.log('Você está na nossa lista de espera')
        break
    case 50:
        console.log('Você foi reprovado')
        break
    default:
        console.log('Nota invalida')
}