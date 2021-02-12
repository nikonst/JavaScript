const express = require('express')
const router = express.Router()

//User model
const Product = require('../../models/Product')

//GET api/users
router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 }) //sort descending
        .then(products => res.json(products))
})

//POST api/users
router.post('/', (req, res) => {
    console.log("SERVER", req)
    const newProduct = new Product({
        name: req.body.name
    })
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => console.log(err))

})

//DELETE api/users/:id
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({ success: true })))
        .catch(error=>res.status("404").json({success: false}))

})

module.exports = router