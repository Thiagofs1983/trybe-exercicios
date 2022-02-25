let menuSandwich = document.querySelector('.menu-sandwich')
console.log(menuSandwich)

menuSandwich.addEventListener('click', function(event){
    let menu = document.querySelector('.lista')
    menu.classList.toggle('menu')
})