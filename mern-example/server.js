const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//BodyParser middleware
app.use(bodyParser.json())

//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mern-example')
    .then(() => console.log("Connected..."))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Listening at", port)
})