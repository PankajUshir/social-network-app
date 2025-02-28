const express = require('express')
require('dotenv').config()
const logger = require('./common/logger')
const router = require('./routes')
const { sequelize } = require('./db/config/sequelize')
const models = require('./db/models')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

const port = process.env.PORT

sequelize
    .authenticate()
    .then(() => {
        app.listen(port, () => {
            logger.info(
                `Database Connection has been established successfully on ${new Date()}`
            )
            logger.info(`Server Running at ${port} on ${new Date()}`)
        })
    })
    .catch((error) => {
        logger.error('Unable to connect to the database:', error)
    })
