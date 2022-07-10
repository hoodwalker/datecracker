const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        //console.log("Mongo URI: ", process.env.MONGO_URI) 
        const conn = await mongoose.connect(process.env.MONGO_URI)
        //console.log("connection: ", conn)
        console.log(`Mongo DB connected on ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB