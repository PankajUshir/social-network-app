const { Router } = require('express')
const { sendResponse, handleServerError } = require('../../utils/response')
const router = Router()

router.get('/get', function getall(req, res, next) {
    try {
        const data = { dddd: 'hello' }
        return sendResponse(res, data)
    } catch (error) {
        handleServerError(res, error)
    }
})

module.exports = router
