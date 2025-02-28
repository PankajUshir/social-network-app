class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
        this.statusCode = 400 // Bad Request
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.statusCode = 500 // Internal Server Error
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotFoundError'
        this.statusCode = 404 // Not Found
    }
}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message)
        this.name = 'UnauthorizedError'
        this.statusCode = 401 // Unauthorized
    }
}

class CustomError extends Error {
    constructor(message, code = 400) {
        super(message)
        this.name = 'Error'
        this.statusCode = 200
    }
}

module.exports = {
    ValidationError,
    DatabaseError,
    NotFoundError,
    UnauthorizedError,
    CustomError,
}
