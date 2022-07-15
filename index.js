const data = require('./data')

const displayStudentMarkListTable = (students) => {
  const transformed = students.map(({marks, ...rest}) => ({ ...rest, ...marks }))
  console.table(transformed)
}

const generateRank = (students) => {
  return students
    .filter((student) => student.isPassed)
    .sort((a,b) => b.total - a.total)
    .map((student, index) => ({ ...student, rank: index + 1 }))
    .concat(students.filter((student) => !student.isPassed))
}

const processMarkSheet = (student) => 
  {
    const marks = Object.values(student.marks)
    const isPassed = marks.every(mark => mark >= 40);
    return ({
      ...student,
      total: marks.reduce((mark, value) => value + mark, 0),
      isPassed
    })
  }

const processStudentMark = (students) => students.map(processMarkSheet)

const main = () => {
  const processedStudentReports = processStudentMark(data)
  const processedRanksData = generateRank(processedStudentReports)
  displayStudentMarkListTable(processedRanksData)
}

main()