const express = require('express')
const authController = require('../controllers/auth/controller')
const userController = require('../controllers/user/controller')
const authenticateToken = require('../middleware/authMiddleware')

const router = express.Router()
router.use('/v1', authController)

// router.use('/v1/auth', authenticateToken)
router.use('/v1/auth/user', userController)

module.exports = router
