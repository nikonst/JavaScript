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

module.exports = router