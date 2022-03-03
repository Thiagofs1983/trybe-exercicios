const btnClick = document.querySelector('#btn-click');
const quantClick = document.querySelector('#quant-click');
let clickCount = 0

btnClick.addEventListener('click', () => quantClick.innerHTML = clickCount += 1)