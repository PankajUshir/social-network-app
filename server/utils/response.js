function sendResponse(res, data = {}, statusCode = 200) {
    res.status(statusCode).json(data)
}

function created(res, data = {}, message = 'created successfully') {
    res.status(201).json({ data, message }) // 201 Created
}

module.exports = {
    sendResponse,
    created,
}
