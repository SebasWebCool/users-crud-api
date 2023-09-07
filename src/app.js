//? Dependencies
import moment from 'moment'; // require
moment().format(); 
import express, { json } from 'express';
import cors from 'cors';
import { authenticate, sync } from './utils/database';

//? Files
import { port } from './config';
//* Routes
import userRouter from './users/users.router';
import authRouter from './auth/auth.router';
// const initModels = require('./models/initModels')

//? Initial Configs
const app = express()
app.use(cors())
app.use(json())

authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

// initModels()


app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

