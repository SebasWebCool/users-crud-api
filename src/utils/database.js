const { Sequelize } = require('sequelize')
const config = require('../config')

const db = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: false,
        native:true
      },
    host: config.db.host, //? Variable de entorno del host
    username: config.db.username, //? Variable de entorno del usuario
    password: config.db.password, //? Variable de entorno de la contraseña
    database: config.db.dbName, //? Variable de entorno de la base de datos
    port: config.db.dbPort
})

module.exports = db