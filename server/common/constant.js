require('dotenv').config({ path: '../.env' })

module.exports = {
    auth: {
        saltRounds: 10,
        jwtSecretKey: process.env.JWT_SECRETKEY,
    },
}
