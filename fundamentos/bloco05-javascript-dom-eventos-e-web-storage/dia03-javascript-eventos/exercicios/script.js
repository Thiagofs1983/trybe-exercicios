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

function mudaCor() {
  let mudaHoliday = document.querySelectorAll(".holiday");
  for (let index = 0; index < mudaHoliday.length; index += 1) {
    let cor = mudaHoliday[index];
    if (cor.style.backgroundColor === "green") {
      cor.style.backgroundColor = "rgb(238, 238, 238)";
    } else {
      cor.style.backgroundColor = "green";
    }
  }
}
//mudaCor()

/* function voltaCor() {
    let mudaHoliday = document.querySelectorAll('.holiday')
    for(let index = 0; index < mudaHoliday.length; index += 1){
        mudaHoliday[index].style.backgroundColor = 'rgb(238,238,238)'
    }
} */
//voltaCor()

function adicionaEventos() {
  let mudaCores = document.querySelector("#btn-holiday");
  mudaCores.addEventListener("click", mudaCor);
  //mudaCores.addEventListener('click', voltaCor)
}
//adicionaEventos()

window.addEventListener("load", adicionaEventos);

console.log(document.querySelector("body"));
