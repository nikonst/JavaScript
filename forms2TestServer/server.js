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
    'name': 'Hello Student!'
  })
})

app.get('/teacher', (req, res) => {
  let teacherObj = {
    'name': 'Hello Teacher!',
    'school': 'ΓΥΜΝΑΣΙΟ'
  }
  console.log(typeof teacherObj)
  res.json(teacherObj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})