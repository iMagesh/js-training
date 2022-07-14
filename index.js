const data = require('./data')

const calculateTotal = (student) => {
  const marks = Object.values(student.marks)
  student.totalMark = marks.reduce((mark, value) => value + mark , 0)
  return student
}
 
const transformStudent = (student) =>{
  const { id, name, totalMark, marks: {english, social, science} }  = student
  return `${id}, ${name}, ${english} ${social} ${science}: ${totalMark}`
}

const logResult = (result) => console.log(result)

const main = () => {
  data
    .map(calculateTotal)
    .map(transformStudent)
    .map(logResult)
}

main()