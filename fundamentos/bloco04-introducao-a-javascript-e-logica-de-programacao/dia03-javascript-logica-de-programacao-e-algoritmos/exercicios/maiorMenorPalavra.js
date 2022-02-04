let array = ['java', 'javascript', 'python', 'html', 'css'];
let resultadoMaior = array[0]
let resultadoMenor = array[0]

for(let index = 1; index < array.length; index += 1) {
    if(array[index].length > resultadoMaior.length){
        resultadoMaior = array[index]
    }
}
console.log(resultadoMaior)

for(let index = 0; index < array.length; index += 1) {
    if(array[index].length < resultadoMenor.length) {
        resultadoMenor = array[index]
    }
}
console.log(resultadoMenor)