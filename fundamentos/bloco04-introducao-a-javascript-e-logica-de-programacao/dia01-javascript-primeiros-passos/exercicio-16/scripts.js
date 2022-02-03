const salarioBruto = 3000
let aliquotaInss = 0;
let ir = 0;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11
}else {
    aliquotaInss = 570.88
}
//console.log(aliquotaInss)

let salarioBase = salarioBruto - aliquotaInss
//console.log(salarioBase)

if (salarioBase < 1903.98) {
    ir = 0
}else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    ir = ((salarioBase * 0.075) - 142.8).toFixed(2)
}else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    ir = ((salarioBase * 0.15) - 354.8).toFixed(2)
}else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    ir = ((salarioBase * 0.225) - 636.13).toFixed(2)
}else if (salarioBase > 4664.68) {
    ir = ((salarioBase * 0.275) - 869.36).toFixed(2)
}
//console.log(ir)
const salarioLiquido = salarioBase - ir
console.log(salarioLiquido)