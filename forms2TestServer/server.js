const express = require('express')
const app = express()
const port = 5050

app.get('/student', (req, res) => {
  res.json({'name':'Hello Student!',
    })
})

app.get('/teacher', (req, res) => {
    res.json({'name':'Hello Teacher!',
        'school':'ΓΥΜΝΑΣΙΟ'})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})