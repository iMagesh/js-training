const data = require('./data')

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
 
const transformStudent = (student) =>{
  const { id, name, total, isPassed, marks: {english, social, science}, rank }  = student
  return `${id}, ${name}, ${english} ${social} ${science}: 
    ${total} ${isPassed ? 'Pass' : 'Fail'} Rank: ${rank || 'F'}`
}

const logResult = (result) => console.table(result)

const processStudentMark = (students) => students.map(processMarkSheet)

const generateRank = (students) => {
  return students
    .filter((student) => student.isPassed)
    .sort((a,b) => b.total - a.total)
    .map((student, index) => ({ ...student, rank: index + 1 }))
    .concat(students.filter((student) => !student.isPassed))
}

const displayStudentMarkList = (students) => {
  // students.map(transformStudent).map(logResult)
  const transformed = students.map(({marks, ...rest}) => ({ ...rest, ...marks }))
  console.table(transformed)
}

const main = () => {
  const processedStudentReports = processStudentMark(data)
  const processedRanksData = generateRank(processedStudentReports)
  displayStudentMarkList(processedRanksData)
}

main()