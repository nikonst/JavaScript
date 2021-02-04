const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', UserSchema)
module.exports = User
