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
    'name': 'ΔΗΜΗΤΡΙΟΥ ΔΗΜΗΤΡΗΣ',
    'status': 'ΜΑΘΗΤΗΣ',
    'mail': 'ddim@sch.gr',
    'unit[0]': 'gym-pteleou',
    'unit-code[0]':3513020,
    'unit-loc[0]': 'mag',
    'unit[1]': 'thess',
    'unit-code[1]':9999905,
    'unit-loc[1]': 'pde',
    'unit-description':'ΓΡΑΜΜΑΤΙΚΕΙΟΝ (ΓΥΜΝΑΣΙΟ ΠΤΕΛΕΟΣ)',
    'unit_type[0]':'ΓΥΜΝΑΣΙΟ',
    'education_level[0]': 'ΔΕΥΤΕΡΟΒΑΘΜΙΑ'
  })
})

app.get('/teacher', (req, res) => {
  let teacherObj = {
    'name': 'ΓΕΩΡΓΙΟΥ ΓΕΩΡΓΙΟΣ',
    'status': 'ΕΚΠΑΙΔΕΥΤΙΚΟΣ',
    'mail': 'georgiou@sch.gr',
    'unit[0]': 'gym-pteleou',
    'unit-code[0]':3513020,
    'unit-loc[0]': 'mag',
    'unit[1]': 'thess',
    'unit-code[1]':9999905,
    'unit-loc[1]': 'pde',
    'unit-description':'ΓΡΑΜΜΑΤΙΚΕΙΟΝ (ΓΥΜΝΑΣΙΟ ΠΤΕΛΕΟΣ)',
    'unit_type[0]':'ΔΗΜΟΤΙΚΟ',
    'education_level[0]': 'ΠΡΩΤΟΒΑΘΜΙΑ'
  }
  res.json(teacherObj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})