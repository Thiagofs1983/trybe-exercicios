/* const a = Math.floor(Math.random() * 100 + 1);
const b = 3;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo); */
function adicao(a, b) {
    return a + b
}
console.log(adicao(2, 3))

function subtracao(a, b) {
    return a - b
}
console.log(subtracao(2, 3));

function multiplicacao(a, b) {
    return a * b
}
console.log(multiplicacao(2, 3));

function divisao(a, b) {
    return a / b
}
console.log(divisao(4, 2));

function modulo (a, b) {
    return a % b
}
console.log(modulo(3, 2));

/* const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
console.log(a , b)

const resultado = a > b ? console.log(a) : console.log(b) */

function qualMaiorNumero(a ,b) {
    return a > b ? a : b
}
console.log(qualMaiorNumero(5, 7))

/* const a = 10;
const b = 20;
const c = 30;

if (a > b && a > c) {
    console.log(a);
}else if (b > a && b > c) {
    console.log(b);
}else {
    console.log(c);
} */

function maiorNum(a, b, c) {
    if(a > b && a > c) {
        return a
    }else if(b > a && b > c) {
        return b
    }else {
        return c
    }
}
console.log(maiorNum(40, 50, 30))

/* const a = 0;

if (a > 0) {
    console.log('positive');
}else if (a < 0) {
    console.log ('negative');
}else {
    console.log ('zero');
} */

function negativoPositivo (a) {
    if (a > 0) {
        return 'positive'
    }else if (a < 0) {
        return 'negative'
    }else {
        return 'zero'
    }    
}
console.log(negativoPositivo(-5))

/* const primeiroAngulo = 90;
const segundoAngulo = 50;
const terceiroAngulo = 30;

if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0){
    console.log('Angulo invalido');
}else if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180) {
    console.log(true);
}else {
    console.log(false)
} */

function angulosTriangulo (primeiroAngulo, segundoAngulo, terceiroAngulo) {
    if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0){
        return 'Angulo invalido'
    }else if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180) {
        return true
    }else {
        return false
    }
}
console.log(angulosTriangulo(90, 50, 40))