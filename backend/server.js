const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')
//console.log("process.env", process.env)
const PORT = process.env.PORT || 4400

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))
app.use('/api/breakers', require('./routes/breakerRoutes'))
//app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


