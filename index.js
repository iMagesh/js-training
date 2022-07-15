const data = require('./data')

const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const formatStudent = ({isPassed, marks, ...rest}) => {
  const student = {...rest, ...marks, result: isPassed ? 'Pass' : 'Fail'}
  const studentObjectKeys = Object.keys(student)
  return studentObjectKeys.reduce((acc, key) => {
    acc[capitalizeString(key)] = student[key]
    return acc
  }, {})
}

const printStudentsMarkListTable = (students) => {
  const transformedStudents = students.map(formatStudent)
  console.table(transformedStudents)
}

const generateStudentsRank = (students) => {
  const passedStudents = students.filter((student) => student.isPassed)
  const failedStudents = students.filter((student) => !student.isPassed)
  const rankedStudents = passedStudents
    .sort((a,b) => b.total - a.total)
    .map((student, index) => ({ ...student, rank: index + 1 }))

  return rankedStudents.concat(failedStudents)
}

const processMarkSheet = (student) => {
  const marks = Object.values(student.marks)
  const isPassed = marks.every(mark => mark >= 40);

  return ({
    ...student,
    total: marks.reduce((acc, value) => value + acc, 0),
    isPassed
  })
}

const processStudentMarks = (students) => students.map(processMarkSheet)

const main = (students) => {
  const processedStudentReports = processStudentMarks(students)
  const processedRanksData = generateStudentsRank(processedStudentReports)
  printStudentsMarkListTable(processedRanksData)
}

main(data)