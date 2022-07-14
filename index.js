const data = require('./data')

const main = () => {
  data.map((student) => {
    const marks = student.marks
    console.log(`${student.id}, ${student.name}, English: ${marks.english}`)
  })
}

main()