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
console.log(lesson2)

const listaKeys = obj => console.log(Object.keys(obj))
listaKeys(lesson2)

const tamanhoObjeto = obj => console.log(`O objeto tem ${Object.keys(obj).length} propriedades`)
tamanhoObjeto(lesson2)

const valoresObjeto = obj => console.log(Object.values(obj))
valoresObjeto(lesson2)