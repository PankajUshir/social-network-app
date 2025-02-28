import logger from '../common/logger'

const jwt = require('jsonwebtoken')
const constant = require('../common/constant')

export const fetchTokenData = (token) => {
    if (!token) {
        logger.error('Token Not Found')
    }

    const tokenData = jwt.decode(token, constant.auth.jwtSecretKey)

    if (!tokenData) logger.error('Token Data is not found')

    return tokenData
}

export const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, constant.auth.jwtSecretKey, { expiresIn })
}
