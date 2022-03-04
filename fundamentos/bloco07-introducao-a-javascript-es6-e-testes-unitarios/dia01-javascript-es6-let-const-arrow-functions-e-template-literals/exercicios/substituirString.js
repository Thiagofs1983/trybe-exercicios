const skills = ['JavaScript', 'CSS', 'HTML', 'DOM', 'FlexBox'];

const recebeString = (str) => `Tryber ${str} aqui!` //Minhas cinco principais habilidades são:${skills.sort()}. #goTrybe`

const frasecompleta = (recebeString) => {

    return `${recebeString} Minhas cinco principais habilidades são:${skills.sort()}. #goTrybe`
}
console.log(frasecompleta(recebeString('Thiago'))) 

