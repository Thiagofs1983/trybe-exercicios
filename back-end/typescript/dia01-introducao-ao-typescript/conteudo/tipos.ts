enum StudentStatus {
    Active = 1,
    Inactive,
    Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

enum directionsGamePad {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGTH = "RIGHT",
  }

const directions: directionsGamePad = directionsGamePad.DOWN;
console.log(directions);

enum daysOfWeek {
    Segunda = 2,
    Terça = 3,
    Quarta = 4,
    Quinta = 5,
    Sexta = 6,
    Sabado = 7,
    Domingo = 1
}

const day: daysOfWeek = daysOfWeek.Sabado;
console.log(day);
