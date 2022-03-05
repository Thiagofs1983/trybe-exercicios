const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
const adicionaTurno = (obj, turno, noite) => obj[turno] = noite
adicionaTurno(lesson2, 'turno', 'noite')

const listaKeys = obj => console.log(Object.keys(obj))
listaKeys(lesson2)

const tamanhoObjeto = obj => console.log(`O objeto tem ${Object.keys(obj).length} propriedades`)
tamanhoObjeto(lesson2)

const valoresObjeto = obj => console.log(Object.values(obj))
valoresObjeto(lesson2)

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
//console.log(allLessons)

const totalEstudantes = obj => {
    let lessons = Object.keys(obj)
    let total = 0
    for(let index = 0; index < lessons.length; index += 1) {
        //console.log(lessons[index])
        let key = lessons[index]
        //console.log(key.numeroEstudantes) - Não acessa o objeto
        //console.log(obj.key.numeroEstudantes) - Não acessa o objeto
        console.log(obj[key].numeroEstudantes) // acessa os values do objeto
        total += obj[key].numeroEstudantes
    }
    return total
    
}
console.log(totalEstudantes(allLessons))