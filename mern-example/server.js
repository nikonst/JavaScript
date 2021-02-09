const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


const users = require('./routes/api/users')
//BodyParser middleware
app.use(bodyParser.json())
app.use(cors())
//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mern-example')
    .then(() => console.log("Connected..."))
    .catch(err => console.log(err))

//Routes
app.use('/api/users', users)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Listening at", port)
})