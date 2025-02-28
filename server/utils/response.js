function sendResponse(res, data = {}, statusCode = 200) {
    res.status(statusCode).json(data)
}

function sendCreated(res, data = {}) {
    res.status(201).json({ data: data }) // 201 Created
}

function sendUnauthorized(res, message = 'unauthorized') {
    res.status(401).json({ error: message })
}

function sendNotFound(res, message = 'Resource not found') {
    res.status(404).json({ error: message }) // 404 Not Found
}

function sendBadRequest(res, message = 'Bad Request') {
    res.status(400).json({ error: message }) // 400 Bad Request
}

function handleServerError(res, error, message = 'Internal Server Error') {
    console.error('Error:', error) // Log the error (replace with your logger if needed)
    res.status(500).json({ error: message }) // 500 Internal Server Error
}

module.exports = {
    sendResponse,
    sendUnauthorized,
    sendCreated,
    sendNotFound,
    sendBadRequest,
    handleServerError,
}
