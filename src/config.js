//? Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development', //? Desarrollo, Testing, Produccion
    jwtSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST ,
        username: process.env.DB_USER ,
        password: process.env.DB_PASS ,
        dbName: process.env.DB_NAME,
        dbPort: process.env.DB_PORT
    }

}

module.exports = config