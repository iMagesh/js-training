const data = require('./data')

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatStudent = ({marks, ...rest}) => {
  const student = {...rest, ...marks}
  return Object.keys(student).reduce((obj, key) => {
    obj[capitalizeString(key)] = student[key]
    return obj
  }, {})
}

const displayStudentMarkListTable = (students) => {
  const transformedStudents = students.map(formatStudent)
  console.table(transformedStudents)
}

const generateRank = (students) => {
  const passedStudents = students.filter((student) => student.isPassed)
  const failedStudents = students.filter((student) => !student.isPassed)
  const rankedStudents = passedStudents
    .sort((a,b) => b.total - a.total)
    .map((student, index) => ({ ...student, rank: index + 1 }))
  return rankedStudents.concat(failedStudents)
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