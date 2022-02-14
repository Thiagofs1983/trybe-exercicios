function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function criarDias() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let diasMes = document.getElementById("days");
    let listaDias = dezDaysList[index];
    listaDias = document.createElement("li");
    listaDias.innerHTML = dezDaysList[index];
    listaDias.className = "day";
    diasMes.appendChild(listaDias);
    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      listaDias.className = "day holiday";
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      listaDias.className = "day friday";
    }
    if (dezDaysList[index] === 25) {
      listaDias.className = "day holiday friday";
    }
  }
}
criarDias();

function criarBotao(descricaoBotao, id) {
  let buttonsContainer = document.querySelector(".buttons-container");
  let btnFeriados = document.createElement("button");
  btnFeriados.innerHTML = descricaoBotao;
  btnFeriados.id = id;
  buttonsContainer.appendChild(btnFeriados);
}
criarBotao("Feriados", "btn-holiday");
criarBotao("Sexta-Feira", "btn-friday");

function mudaCor() {
  let mudaHoliday = document.querySelectorAll(".holiday");
  for (let index = 0; index < mudaHoliday.length; index += 1) {
    let cor = mudaHoliday[index];
    if (cor.style.backgroundColor === "rgb(190, 190, 190)") {
      cor.style.backgroundColor = "rgb(238, 238, 238)";
    } else {
      cor.style.backgroundColor = "rgb(190, 190, 190)";
    }
  }
}

function adicionaEventos() {
  let mudaCores = document.querySelector("#btn-holiday");
  let mudaSextas = document.querySelector("#btn-friday");
  let taskSelected = document.querySelector(".task");
  mudaCores.addEventListener("click", mudaCor);
  mudaSextas.addEventListener("click", mudaTexto);
  taskSelected.addEventListener('click', mudaClass);
  
}

function mudaTexto() {
  let mudaSexta = document.querySelectorAll(".friday");
  const fridayDez = [4, 11, 18, 25];
  for (let index = 0; index < mudaSexta.length; index += 1) {
    if (mudaSexta[index].innerText === "SEXTOU") {
      mudaSexta[index].innerHTML = fridayDez[index];
    } else {
      mudaSexta[index].innerText = "SEXTOU";
    }
  }
}

let zoom = document.querySelectorAll(".day");
for (let index = 0; index < zoom.length; index += 1) {
  zoom[index].addEventListener("mouseover", function (event) {
    zoom.innerHTML = event.target.style.fontSize = "30px";
  });
  zoom[index].addEventListener("mouseout", function (event) {
    zoom.innerHTML = event.target.style.fontSize = "20px";
  });
}
let myTasks = document.querySelector(".my-tasks");
function calendarTasks(nameTask, task) {
  nameTask = document.createElement("span");
  nameTask.innerHTML = task;
  myTasks.appendChild(nameTask);
}
calendarTasks("task1", "cozinhar");

function legenda(cor) {
  let corLegenda = document.createElement("div");
  corLegenda.className = "task";
  corLegenda.style.backgroundColor = cor;
  myTasks.appendChild(corLegenda);
}
legenda("green");

let taskSelected = document.querySelector(".task");
function mudaClass() {
  if(taskSelected.className === 'task') {
    taskSelected.className = 'task selected'
  }else {
    taskSelected.className = 'task'
  }
}

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

window.addEventListener("load", adicionaEventos);

console.log(document.querySelector("body"));
