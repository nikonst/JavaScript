const configs = require('../config.js')
const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    const token = req.header("x-auth-token")

    if (!token) return res.status(401).json({ msg: "No token authorization..." })

    try {
        const decoded = jwt.verify(token, configs.JWTSECRET)
        req.user = decoded
        next()
    }
    catch (e) {
        res.status(400).json({ msg: "Token is not valid." })
    }
}

module.exports = authMiddleware