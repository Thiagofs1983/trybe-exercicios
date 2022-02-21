//SELETORES
const INPUT_TEXT = document.querySelector('#input-text');
const INPUT_CHECKBOX = document.querySelector('#input-checkbox');
const HREF_LINK = document.querySelector('#href');

function preventDefault(event){
    event.preventDefault()
}

HREF_LINK.addEventListener('click', preventDefault)
INPUT_CHECKBOX.addEventListener('click', preventDefault)
INPUT_TEXT.addEventListener('keypress', function(event){
    let caracter = event.key;
    if(caracter !== 'a'){
        event.preventDefault()
    }
})
