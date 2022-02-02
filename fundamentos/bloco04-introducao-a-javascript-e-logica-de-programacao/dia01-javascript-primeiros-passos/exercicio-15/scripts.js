const custoProduto = 100
const valorVenda = 130
const impostoSobreOProduto = custoProduto * (20 / 100)
//console.log(impostoSobreOProduto)
const valorCustoTotal = custoProduto + impostoSobreOProduto
//console.log(valorCustoTotal)
const lucro = valorVenda - valorCustoTotal
//console.log(lucro)

if (custoProduto < 0 || valorVenda < 0) {
    console.log('Valor incorreto')
} else {
    console.log(lucro * 1000)
}