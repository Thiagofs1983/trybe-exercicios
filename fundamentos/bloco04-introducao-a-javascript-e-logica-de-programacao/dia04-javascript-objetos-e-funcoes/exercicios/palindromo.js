function verificaPalindromo(palavra) {
    if(palavra.split('').reverse().join('') === palavra) {
        return true
    }else {
        return false
    }
}
console.log(verificaPalindromo('arara'))
console.log(verificaPalindromo('desenvolvimento'))