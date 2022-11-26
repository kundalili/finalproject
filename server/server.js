const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const db = require('./config/db')
db()

app.use(express.json()) // to process the req.body
app.use(cookieParser())

app.use('/user', require('./routes/userRoutes'))
app.use('/user/0', require('./routes/midwifeRoutes'))
app.use('/user/1', require('./routes/pregnantRoutes'))
app.use('/message', require('./routes/messageRoutes'))


const port = process.env.PORT || 5001
app.listen(port, () => console.log('Server Started',port))