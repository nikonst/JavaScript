const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const configs = require('./config.js')

const app = express()


//const products = require('./routes/api/products')
//const users = require()
//BodyParser middleware
app.use(bodyParser.json())
app.use(cors())
//Connect to MongoDB
const mongoURI = configs.MONGOURI
mongoose.connect(mongoURI)
    .then(() => console.log("Connected..."))
    .catch(err => console.log(err))

//Routes
app.use('/api/products', require('./routes/api/products'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Listening at", port)
})