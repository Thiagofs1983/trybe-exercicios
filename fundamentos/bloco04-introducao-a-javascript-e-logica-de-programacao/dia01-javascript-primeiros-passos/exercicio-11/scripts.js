const pecaXadrez = 'Torre'

switch (pecaXadrez) {
    case 'Bispo':
        console.log('Movimento em L')
        break
    case 'Torre':
        console.log('Movimentos verticais e horizontais')
        break
    default:
        console.log('Peça invalida')
        break
}