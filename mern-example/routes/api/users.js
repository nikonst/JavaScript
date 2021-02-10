const express = require('express')
const router = express.Router()

//User model
const User = require('../../models/User')

//GET api/users
router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 }) //sort descending
        .then(users => res.json(users))
})

//POST api/users
router.post('/', (req, res) => {
    console.log("SERVER", req)
    const newUser = new User({
        name: req.body.name
    })
    newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err))

})

//DELETE api/users/:id
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(error=>res.status("404").json({success: false}))

})

module.exports = router