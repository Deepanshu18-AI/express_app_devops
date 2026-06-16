const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Pipe open</h1>')
})

app.get('/sekret', (req, res) => {
  res.send({ what: 'cookie'})
})

const PORT = 8080
console.log("Hello World! Pipeline Version 1.0")
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})