let maiorNumeroPrimo = 0;
for (let index = 0; index <= 50; index +=1) {
    let primo = true
    for (let indexDivisor = 2; indexDivisor < index; indexDivisor +=1) {
        if(index % indexDivisor === 0) {
            primo = false;
        }
    }
    if(primo == true) {
        maiorNumeroPrimo = index
    }
}
console.log(maiorNumeroPrimo)