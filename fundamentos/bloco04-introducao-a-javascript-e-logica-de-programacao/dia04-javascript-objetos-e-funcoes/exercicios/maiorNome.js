function maiorNome(nomes) {
    let maiorNome = ''
    for(let index of nomes) {
        if(index.length > maiorNome.length) {
            maiorNome = index
        }
    }
    return maiorNome
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
console.log(maiorNome(['José', 'Lucas Fernandes', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))