window.onload = function() {
    let selectFundo = document.querySelector('#corFundo');
    selectFundo.addEventListener('change', function() {
        let selected = selectFundo.selectedOptions[0]
        document.body.style.backgroundColor = selected.value;
        localStorage.setItem('body-backgroundColor', selected.value)
    })
    let selectCorLetra = document.querySelector('#corLetra');
    selectCorLetra.addEventListener('change', function() {
        let selected = selectCorLetra.selectedOptions[0]
        document.body.style.color = selected.value
        localStorage.setItem('body-color', selected.value)
    })

    let inputFontSize = document.querySelector('input[name = "font-size"]');
    inputFontSize.addEventListener('change', function() {
        let p = document.querySelector('p')
        p.style.fontSize = `${inputFontSize.value}px`
        localStorage.setItem('body-fontSize', `${inputFontSize.value}px`)
    })

    let changeLineHeigth = document.querySelector('input[name = "font-heigth"')
    changeLineHeigth.addEventListener('change', function() {
        let p = document.querySelector('p')
        p.style.lineHeight = `${changeLineHeigth.value}em`
        localStorage.setItem('line-heigth', `${changeLineHeigth.value}em`)
    })
    
    let mudaFonte = document.querySelector('#font-family')
    mudaFonte.addEventListener('change', function(){
        let mudarFonte = document.querySelector('body')
        mudarFonte.style.fontFamily = mudaFonte.value
        localStorage.setItem('muda-fonte', mudaFonte.value)
    })

    let saveBackgroundColor = localStorage.getItem('body-backgroundColor');
    document.body.style.backgroundColor = saveBackgroundColor
    
    let saveColor = localStorage.getItem('body-color');
    document.body.style.color = saveColor
    
    let saveFontSize = localStorage.getItem('body-fontSize');
    document.body.style.fontSize = saveFontSize
    
    let saveLineHeigth = localStorage.getItem('line-heigth')
    document.querySelector('p').style.lineHeight = saveLineHeigth

    let saveMudaFonte = localStorage.getItem('muda-fonte')
    document.querySelector('body').style.fontFamily = saveMudaFonte
}