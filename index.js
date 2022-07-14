const data = require('./data')

const calculateTotal = (student) => {
  const marks = Object.values(student.marks)
  const total = marks.reduce((mark, value) => value + mark , 0)
  return { ...student, total }
}

const refactorCalculateTotal = (student) => 
  ({
    ...student, 
    total: Object.values(student.marks).reduce((mark, value) => value + mark, 0) 
  })
 
const transformStudent = (student) =>{
  const { id, name, total, marks: {english, social, science} }  = student
  return `${id}, ${name}, ${english} ${social} ${science}: ${total}`
}

const logResult = (result) => console.log(result)

const main = () => {
  data
    .map(refactorCalculateTotal)
    .map(transformStudent)
    .map(logResult)
}

main()