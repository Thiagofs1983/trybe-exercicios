function mudaCorDeFundo() {
    let corDeFundo = document.querySelector('#cor-de-fundo')
    corDeFundo.addEventListener('change', function(){
        let body = document.querySelector('body')
        body.style.backgroundColor = corDeFundo.value
        localStorage.setItem('body-cor-de-fundo', corDeFundo.value)
    })
}
mudaCorDeFundo()

function mudaCorLetra(){
    let corLetra = document.querySelector('#cor-de-letra')
    corLetra.addEventListener('change', function(){
        let paragrafo = document.querySelector('p')
        paragrafo.style.color = corLetra.value
        localStorage.setItem('cor-letra', corLetra.value)
    })

}
mudaCorLetra()

function mudaFontSize() {
    let fontSizeParagrafo = document.querySelector('input[name = "font-size"')
    fontSizeParagrafo.addEventListener('input', function(){
        let paragrafo = document.querySelector('p')
        paragrafo.style.fontSize = `${fontSizeParagrafo.value}px`
        localStorage.setItem('font-size', `${fontSizeParagrafo.value}px`)
    })
}
mudaFontSize()

function alturaLinha(){
    let alturaDaLinha = document.querySelector('input[name = "line-heigth')
    alturaDaLinha.addEventListener('change', function(){
        let paragrafo = document.querySelector('p')
        paragrafo.style.lineHeight = `${alturaDaLinha.value}em`
        localStorage.setItem('line-heigth', `${alturaDaLinha.value}em`)
    })
}
alturaLinha()

function mudaFonte() {
    let mudarFonte = document.querySelector('#mudar-fonte')
    mudarFonte.addEventListener('change', function() {
        let pagina = document.querySelector('body')
        pagina.style.fontFamily = mudarFonte.value
        localStorage.setItem('muda-fonte', mudarFonte.value)
    })
}
mudaFonte()

let saveCorDeFundo = localStorage.getItem('body-cor-de-fundo')
document.querySelector('body').style.backgroundColor = saveCorDeFundo

let saveCorLetra = localStorage.getItem('cor-letra')
document.querySelector('p').style.color = saveCorLetra

let saveFontSize = localStorage.getItem('font-size')
document.querySelector('p').style.fontSize = saveFontSize

let saveLineHeigth = localStorage.getItem('line-heigth')
document.querySelector('p').style.lineHeight = saveLineHeigth

let saveMudaFonte = localStorage.getItem('muda-fonte')
document.querySelector('body').style.fontFamily = saveMudaFonte