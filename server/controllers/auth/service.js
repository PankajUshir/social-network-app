const bcrypt = require('bcrypt')
const constant = require('../../common/constant')
const User = require('../../db/models/User')
const { CustomError } = require('../../utils/error')

class AuthService {
    async register(userData) {
        const userAvailable = await User.findAll({
            where: {
                email: userData.email,
            },
        })

        if (userAvailable && userAvailable.length) {
            throw new CustomError('User Already Available')
        }

        const data = await User.create({
            email: userData.email,
            password_hash: await bcrypt.hash(
                userData.password,
                constant.auth.saltRounds
            ),
            first_name: userData.first_name,
            last_name: userData.last_name,
            last_login: null,
            status: true,
            created_at: new Date(),
        })

        return data.toJSON()
    }
}

module.exports = new AuthService()
