const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const configs = require('./../../config.js')
const jwt = require('jsonwebtoken')

//User model
const User = require('../../models/User')

//POST users/add
//@Access Public
router.post('/add', (req, res) => {
    //res.send("Register")
    const { name, email, password } = req.body
    if( !email || !name || !password) {
        return res.status(400).json({msg: "Enter all fields..."})
    }
    //Check for existing user
    User.findOne({email: email})
    .then(user => {
        if(user) return res.status(400).json({msg: "User allready exists!"})
        const newUser = new User({
            name, email, password
        })
        //Create hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err
                newUser.password = hash
                newUser.save()
                .then(user => {
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
                    /* res.json({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }) */
                //.catch(err => console.log(err))
                })
            })
        })
    })
})

module.exports = router