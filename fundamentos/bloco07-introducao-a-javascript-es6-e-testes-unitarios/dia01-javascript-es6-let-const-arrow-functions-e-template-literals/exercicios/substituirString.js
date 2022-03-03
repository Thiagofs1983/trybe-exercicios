/* function recebeString (strDet, str) {
    let newString = strDet.replace(/x/i, str)
    return newString
} */

const recebeString = (str, strDeterminada) => strDeterminada.replace(/x/i, str)
console.log(recebeString('Thiago', 'Tryber x aqui!'))