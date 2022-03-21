const sum = (...args) => args.reduce((acc, num) => acc + num, 0)
console.log(sum(1,2,3,4))