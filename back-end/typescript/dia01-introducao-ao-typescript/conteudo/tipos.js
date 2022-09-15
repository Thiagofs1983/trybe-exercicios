var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGTH"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
var directions = directionsGamePad.DOWN;
console.log(directions);
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Segunda"] = 2] = "Segunda";
    daysOfWeek[daysOfWeek["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    daysOfWeek[daysOfWeek["Quarta"] = 4] = "Quarta";
    daysOfWeek[daysOfWeek["Quinta"] = 5] = "Quinta";
    daysOfWeek[daysOfWeek["Sexta"] = 6] = "Sexta";
    daysOfWeek[daysOfWeek["Sabado"] = 7] = "Sabado";
    daysOfWeek[daysOfWeek["Domingo"] = 1] = "Domingo";
})(daysOfWeek || (daysOfWeek = {}));
var day = daysOfWeek.Sabado;
console.log(day);
