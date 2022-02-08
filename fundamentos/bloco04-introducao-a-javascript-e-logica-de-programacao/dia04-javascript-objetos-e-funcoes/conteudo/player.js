/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}
let nomeCompleto = player.name + ' ' + player.lastName
console.log(`A jogadora ${nomeCompleto} tem ${player.age} de idade.`)

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]
//"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
let vezesMelhorDoMundo = player.bestInTheWorld.length
console.log(`A jogadora ${nomeCompleto} foi eleita a melhor jogadora do mundo por ${vezesMelhorDoMundo} vezes.`)
console.log(`A jogadora possui ${player.medals['golden']} medalhas de ouro e ${player['medals'].silver} medalhas de prata`)