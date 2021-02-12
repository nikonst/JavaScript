const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product
