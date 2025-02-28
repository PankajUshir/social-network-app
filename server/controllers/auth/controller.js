const { Router } = require('express')
const {
    sendResponse,
    handleServerError,
    created,
} = require('../../utils/response')
const router = Router()
const { User } = require('../../db/models/User')
const { validateRequestBody } = require('../../utils/validation')
const { registration } = require('./schema')
const AuthService = require('./service')

async function loginHandler(req, res, next) {
    try {
        const { email, password } = req.body

        // const user = await User.findAll()
        const user = await User.findOne({
            where: {
                email: email,
            },
        })

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const passwordMatch = await User.authenticate(password)

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ userId: user.id }, config.auth.secretKey, {
            expiresIn: '24h',
        })
        return sendResponse(res, { token: token })
    } catch (error) {
        return handleServerError(res, error)
    }
}

async function registerHandler(req, res, next) {
    try {
        const value = validateRequestBody(registration, req.body)
        const data = await AuthService.register(value)

        return created(res, data, 'User Created Successfully')
    } catch (error) {
        console.log('error : ', error)
        if (error.hasOwnProperty('statusCode')) {
            return res
                .status(error.statusCode)
                .json({ error: error.name, message: error.message })
        } else {
            return res.status(500).json({
                error: 'Internal Server Error',
            })
        }
    }
}

router.get('/login', loginHandler)
router.post('/register', registerHandler)

module.exports = router
