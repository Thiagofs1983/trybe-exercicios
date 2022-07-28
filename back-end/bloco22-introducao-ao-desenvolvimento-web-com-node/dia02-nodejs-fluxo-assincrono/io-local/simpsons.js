const fs = require('fs').promises;

/* const readAll = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => {
      const simpsons = JSON.parse(content);
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)
      // console.log(strings);
      strings.forEach((personagem) => console.log(personagem))
    })
}

readAll(); */

const getPerson = async (id) => {
  const content = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(content)
  // console.log(simpsons);
  const person = simpsons.find((person) => person.id == id)
  // console.log(`${person.id} - ${person.name}`);
  if (!person) {
    throw new Error('id não encontrado');
  }
  return `${person.id} - ${person.name}`
}

const main = async () => {
  try {
    const simpson = await getPerson(9)
    console.log(simpson);
  } catch (error) {
    console.log(error.message);
  }
}

main();