const data = require('./data')

const processMarkSheet = (student) => 
  {
    const marks = Object.values(student.marks)
    const result = marks.every(mark => mark >= 40) ? 'Pass' : 'Fail';
    return ({
      ...student,
      total: marks.reduce((mark, value) => value + mark, 0),
      result
    })
  }
 
const transformStudent = (student) =>{
  const { id, name, total, result, marks: {english, social, science} }  = student
  return `${id}, ${name}, ${english} ${social} ${science}: ${total} ${result}`
}

const logResult = (result) => console.log(result)

const main = () => {
  data
    .map(processMarkSheet)
    .map(transformStudent)
    .map(logResult)
}

main()