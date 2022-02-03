let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let mensagem = 'Nenhum valor encontrado';
for(let number of numbers) {
    if(number % 2 === 1) {
        resultado += 1
    }    
}
if (resultado == 0) {
    console.log('Nenhum valor encontrado')
}else {
    console.log(resultado)
}