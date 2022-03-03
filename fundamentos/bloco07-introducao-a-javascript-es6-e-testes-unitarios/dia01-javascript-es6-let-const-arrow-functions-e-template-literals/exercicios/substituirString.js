const skills = ['JavaScript', 'CSS', 'HTML', 'DOM', 'FlexBox'];

const recebeString = (str, strDeterminada) => strDeterminada.replace(/x/i, str)

const concatenaInfo = () => `${recebeString('Thiago', 'Tryber x aqui!')} Minhas cinco principais habilidades são:
${skills.sort()}.`

console.log(concatenaInfo())