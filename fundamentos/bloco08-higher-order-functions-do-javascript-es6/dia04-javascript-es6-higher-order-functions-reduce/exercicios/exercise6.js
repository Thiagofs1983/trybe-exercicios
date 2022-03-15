const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
  const nameAverage = students.map((element, index) => ({
      name: element,
      average: grades[index].reduce((acc, curr) => acc + curr, 0)/grades[index].length
  }))
  return nameAverage
}

console.log(studentAverage())