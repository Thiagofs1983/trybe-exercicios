let statusAprovacao = 40;

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