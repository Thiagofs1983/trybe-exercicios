const longestWord = word => word.split(' ').sort((a, b) => b.length - a.length)[0]

console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'))