const primeiroAngulo = 90;
const segundoAngulo = 50;
const terceiroAngulo = 30;

if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0){
    console.log('Angulo invalido');
}else if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180) {
    console.log(true);
}else {
    console.log(false)
}