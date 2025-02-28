const { Sequelize } = require('sequelize')
const config = require('./config')

let configuration

if (process.env.NODE_ENV == 'development') {
    configuration = config.development
} else if (process.env.NODE_ENV == 'test') {
    configuration = config.test
} else if (process.env.NODE_ENV == 'production') {
    configuration = config.production
}

const sequelize = new Sequelize(configuration)

module.exports = { sequelize }
