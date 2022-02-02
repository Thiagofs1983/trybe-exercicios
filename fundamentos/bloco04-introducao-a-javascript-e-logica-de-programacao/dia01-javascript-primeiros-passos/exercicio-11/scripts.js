const pecaXadrez = 'RaInHA'

switch (pecaXadrez.toLowerCase()) {
    case 'bispo':
        console.log('Movimento em Diagonal');
        break
    case 'torre':
        console.log('Movimentos verticais e horizontais');
        break
    case 'rainha':
        console.log('Todos os movimentos');
        break
    default:
        console.log('Peça invalida');
        break
}