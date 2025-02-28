const winston = require('winston')
// const { prettyPrint } = winston.format // for combine format youtube : better stack

const logger = winston.createLogger({
    level: 'http',
    format: winston.format.cli(),
    // defaultMeta: { service: 'user-service' },
    transports: [new winston.transports.Console()],
})

// you can various logs for different env variables like dev, prod and test
// if (process.env.NODE_ENV !== 'production') {
//   logger =
// }

module.exports = logger
