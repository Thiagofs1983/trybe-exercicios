/* let word1 = 'Antonio foi no banheiro e não sabemos o que aconteceu'
console.log(word1.split(' ')[0].length) */

const longestWord = word => word.split(' ').sort((a, b) => b.length - a.length)[0]


console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'))