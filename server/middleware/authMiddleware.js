const jwt = require('jsonwebtoken')
const constant = require('../common/constant')
const { sendUnauthorized, sendResponse } = require('../utils/response')

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return sendUnauthorized(res)
    }

    jwt.verify(token, constant.auth.jwtSecretKey, (err, user) => {
        if (err) {
            return sendResponse(res, 403, { message: 'Forbidden' })
        }
        req.user = user
        next()
    })
}

module.exports = authenticateToken
