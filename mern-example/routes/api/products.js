const express = require('express')
const router = express.Router()

const auth = require("../../middleware/authMiddleware")

//User model
const Product = require('../../models/Product')

//GET api/products
//@access Public
router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 }) //sort descending
        .then(products => res.json(products))
})

//POST api/products
//@access Private
router.post('/add', auth, (req, res) => {
    const newProduct = new Product({
        name: req.body.name
    })
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => console.log(err))

})

//DELETE api/products/:id
//@access Private
router.delete('/delete/:id', auth, (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({ success: true })))
        .catch(error=>res.status("404").json({success: false}))

})

module.exports = router