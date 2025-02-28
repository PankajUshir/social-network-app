const { ValidationError } = require('./error')

const validateRequestBody = (schema, data) => {
    const { error } = schema.validate(data)

    if (error) {
        throw new ValidationError(error)
    }
    return data
}

module.exports = {
    validateRequestBody,
}
