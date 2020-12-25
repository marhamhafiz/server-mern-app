const mongoose = require('mongoose')
require('dotenv/config')

mongoose
    .connect(process.env.DB_CONNECTING, 
        { useNewUrlParser: true , useUnifiedTopology: true },
        console.log('DB Connected Successfully'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db