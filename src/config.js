//? Dependencies
require('dotenv').config()


const config = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV || 'development', //? Desarrollo, Testing, Produccion
    jwtSecret: process.env.JWT_SECRET || 'secret',
    db: {
        host: process.env.HOSTNAME  ,
        username: process.env.USERNAME,
        password: process.env.PASSWORD  ,
        dbName: process.env.DATABASE,
        dbPort: process.env.PORT
    }

}
console.log(config)

module.exports = config