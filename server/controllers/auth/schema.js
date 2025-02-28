import Joi from 'joi'

export const registration = Joi.object({
    email: Joi.string().email().required(),
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
})
