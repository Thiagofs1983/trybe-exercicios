/* 
1 - Função que receba 3 parametros
2 - parametro 1 será um array 'gabarito' 
3 - parametro 2 será um array de respostas a serem verificadas(respostas do estudante)
4 - parametro 3 será uma função que checa se as respostas estão corretas
5 - a função checa se as respostas estão corretas e faz a contagem da pontuação final recebida pelo estudante
6 - HOF deve retornar o total da contagem de respostas certas
7 - Se resposta correta a contagem sobe 1 ponto
8 - se resposta for incorreta desce 0.5 pontos
9 - se não houver resposta ("N.A") não altera a contagem
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

*/
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    let points = 0
    for(let index = 0; index < RIGHT_ANSWERS.length; index += 1){
        if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]){
            points += 1
        } else if (STUDENT_ANSWERS[index] !== RIGHT_ANSWERS[index] && STUDENT_ANSWERS[index] === 'N.A') {
            points -= 0.5
        } else{
            points += 0
        }
    }
    return points
}

const testResult = (gabarito, feedback, callback) => {
    let resultado = callback(feedback, gabarito)
    return `O resultado final é ${resultado} pontos`
}

console.log(testResult(STUDENT_ANSWERS, RIGHT_ANSWERS, checkAnswers))