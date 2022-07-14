const data = require('./data')

const transformStudent = (student) =>{
  const { english, social, science}  = student.marks
  return `${student.id}, ${student.name}, ${english} ${social} ${science}`
}

const logResult = (result) => console.log(result)

const main = () => {
  data.map(transformStudent).map(logResult)
}

main()