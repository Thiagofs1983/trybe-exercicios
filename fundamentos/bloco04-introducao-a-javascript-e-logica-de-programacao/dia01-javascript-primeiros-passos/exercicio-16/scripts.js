//CALCULO INSS
const salarioBruto = 3000
let aliquotaInss = 0;
if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = 0.09
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = 0.11
}else {
    aliquotaInss = 570.88
}
let salarioBase = salarioBruto > 5189.82 ? salarioBruto - aliquotaInss : salarioBruto - (salarioBruto * aliquotaInss)

//CALCULO IR
let aliquotaIR = 0
let deducaoIR = 0
if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIR = 0.075
    deducaoIR = 142.8
}else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIR = 0.15
    deducaoIR = 354.8
}else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIR = 0.225
    deducaoIR = 636.13
}else if (salarioBase > 4664.68) {
    aliquotaIR = 0.275
    deducaoIR = 869.36
}

const descontoTrybe = salarioBruto * 0.17
const impostoRenda = (salarioBase * aliquotaIR) - deducaoIR
const salarioLiquido = salarioBase - impostoRenda
console.log(`Salario liquido é: R$ ${salarioLiquido}`)
console.log(`Desconto da Trybe é: R$ ${descontoTrybe.toFixed(2)}`)
const salarioFinal = salarioLiquido - descontoTrybe
console.log(`Salario Final é: R$ ${salarioFinal}`)
