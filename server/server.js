const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const db = require('./config/db')

db()

app.use(express.json())


app.use('/user', require('./routes/userRoutes'))
app.use('/user/0', require('./routes/midwifeRoutes'))
app.use('/user/1', require('./routes/pregnantRoutes'))

const port = process.env.PORT || 5001
app.listen(port, () => console.log('Server Started',port))