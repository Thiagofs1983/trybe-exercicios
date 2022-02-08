function verificaFimPalavra(word, ending) {
    let primeira = ''
    for(let index = word.length - ending.length; index < word.length; index += 1){
        primeira += word[index]
    }
    if(primeira === ending) {
        return true
    }else {
        return false
    }
}
console.log(verificaFimPalavra('trybe', 'be'))
console.log(verificaFimPalavra('Joao fernando', 'fernan'))