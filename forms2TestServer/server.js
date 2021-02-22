const express = require('express')
const app = express()
const port = 5050

app.get('/student', (req, res) => {
  res.send('Hello Student!')
})

app.get('/teacher', (req, res) => {
    res.send('Hello Teacher!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})