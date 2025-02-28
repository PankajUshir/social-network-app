require('dotenv').config({ path: '../.env' })

const config = {
    // for database migration need hardcoded credentials added
    development: {
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD || 'Techladd@123',
        database: process.env.DATABASE_DATABASE || 'sample',
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: process.env.DATABASE_DIALECT || 'mysql',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
}

module.exports = config
