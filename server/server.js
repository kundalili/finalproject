const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

const db = require('./config/db')

require('dotenv').config()
db()

app.use(express.json()) // to process the req.body
app.use(cookieParser())

app.use('/user', require('./routes/userRoutes'))
app.use('/message', require('./routes/messageRoutes'))
app.use('/post', require('./routes/postRoutes'))


app.use(express.static('client/build'));
const port = process.env.PORT || 5001
app.listen(port, () => console.log('Server Started',port))

if( process.env.NODE_ENV === 'production' ) {

    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}