const express = require('express')
const app = express()
const port = 5050

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/student', (req, res) => {
  res.json({
    'name': 'Ίων Μαθητής',
    'school': 'ΓΕΛ',
    'district': 'ΚΡΗΤΗ',
    'email': 'test@student.gr'
  })
})

app.get('/teacher', (req, res) => {
  let teacherObj = {
    'name': 'Ιάσων Καθηγητής',
    'school': 'ΓΥΜΝΑΣΙΟ',
    'district': 'ΑΤΤΙΚΗ',
    'email': 'test@teacher.gr'
  }
  res.json(teacherObj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})