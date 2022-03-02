let total = document.querySelector('.total')
console.log(total)
let preco = document.querySelector('.preco')
console.log(typeof parseInt(preco.value))
let quant = document.querySelector('.quant')
console.log(quant)
let button = document.querySelector('.btn')

button.addEventListener('click', function(){
    let resultado = parseFloat(preco.value) * parseInt(quant.value)
    total.innerHTML = `R$${resultado.toFixed(2)}`
})
