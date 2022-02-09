document.getElementsByTagName('body')[0].style.textAlign = 'center'

const titulo = document.querySelector('h1')
titulo.style.backgroundColor = 'green'
titulo.style.textAlign = 'center'
titulo.style.height = '70px'
titulo.style.lineHeight = '70px'
const emergencyTasks = document.querySelector('.emergency-tasks')
emergencyTasks.style.backgroundColor = 'red'
emergencyTasks.style.display = 'inline-block'
emergencyTasks.style.width = '40%'
let emergencyTasksInter = document.querySelectorAll('.emergency-tasks h3')
for (let index = 0; index < emergencyTasksInter.length; index += 1) {
    emergencyTasksInter[index].style.backgroundColor = 'blue'
    emergencyTasksInter[index].style.textAlign = 'center'
}
const noEmergencyTasks = document.querySelector('.no-emergency-tasks')
noEmergencyTasks.style.backgroundColor = 'green'
noEmergencyTasks.style.textAlign = 'center'
noEmergencyTasks.style.width = '40%'
let noEmergencyTasksInter = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < noEmergencyTasksInter.length; index += 1) {
    noEmergencyTasksInter[index].style.backgroundColor = 'black';
}
const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'black';