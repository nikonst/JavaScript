const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const configs = require('./config.js')
const jwt = require('jsonwebtoken')
const auth = require("./../middleware/auth")

//User model
const User = require('../../models/User')

//POST user/auth
router.post('/users/auth', (req, res) => {
    //res.send("Register")
    const { email, password } = req.body
    if( !email || !password) {
        return res.status(400).json({msg: "Enter email and password..."})
    }
    //Check for existing user
    User.findOne({email: email})
    .then(user => {
        if(user) return res.status(400).json({msg: "User allready exists!"})
        /* const newUser = new User({
            name, email, password
        }) */

        //Validate password
        bcrypt.compare(password, user.password) 
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: "Invalid credentials"})
            jwt.sign(
                {id: user.id},
                configs.JWTSECRET,
                {expiresIn: 3600},
                (err, token) => {
                    if(err) throw err
                    res.json({
                        token: token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    })
                }
            )

        })

    })
})

//
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select("-select")
    .then(user => res.json(user))
})


module.exports = router