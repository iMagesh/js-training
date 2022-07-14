const data = require('./data')

const transformStudent = (student) =>{
  const { english, social, science}  = student.marks
  return `${student.id}, ${student.name}, ${english} ${social} ${science}`
}

const main = () => {
  data.map((student) => {
    console.log(transformStudent(student))
  })
}

main()