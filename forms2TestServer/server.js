const express = require('express')
const app = express()
const port = 5050

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/student', (req, res) => {
  res.send(JSON.stringify({'name':'Hello Student!',
    })
	)
})

app.get('/teacher', (req, res) => {
	let jsonObj = {'name':'Hello Teacher!',
        'school':'ΓΥΜΝΑΣΙΟ'}
	let obj = JSON.parse(jsonObj);
    res.send(obj)
    
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})