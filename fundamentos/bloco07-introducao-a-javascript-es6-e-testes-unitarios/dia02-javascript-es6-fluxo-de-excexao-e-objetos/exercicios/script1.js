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
    let lessons = Object.keys(obj) // [lesson1, lesson2, lesson3]
    let total = 0
    for(let index = 0; index < lessons.length; index += 1) {
        //console.log(lessons[index]) - acessa os valores do array
        let key = lessons[index]
        //console.log(key.numeroEstudantes) - Não acessa o objeto
        //console.log(obj.key.numeroEstudantes) - Não acessa o objeto
        //console.log(obj[key].numeroEstudantes) // acessa os values do objeto
        total += obj[key].numeroEstudantes
    }
    return total
    
}
console.log(totalEstudantes(allLessons))

const getValueByNumber = (obj, position) => Object.values(obj)[position]
console.log(getValueByNumber(lesson1, 0))

const verifyPair = (obj, key, value) => {
    const arrayObj = Object.entries(obj)
    //console.log(arrayObj)
    //console.log(arrayObj.length)
    let result = false
    for(let index = 0; index < arrayObj.length; index += 1){
        //console.log(arrayObj[index])
        if(arrayObj[index][0] === key && arrayObj[index][1] === value) {
            result = true
        }
    }
    return result
}

console.log(verifyPair(lesson2, 'professor', 'Carlos'))

const createReport = obj => {
    const keys = Object.keys(obj)
    //console.log(keys)
    let quantAlunos = 0
    for(let index = 0; index < keys.length; index += 1) {
        //console.log(obj[keys[index]].numeroEstudantes) - acessa a quantidade de estudantes
        let key = keys[index]
        console.log(obj[key].materia)
        if(obj[key].materia === 'Matemática') {
            quantAlunos += obj[key].numeroEstudantes
        }
    }
    return quantAlunos
}

console.log(createReport(allLessons))