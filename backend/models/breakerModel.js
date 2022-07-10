const mongoose = require('mongoose');

const breakerSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }]
})


module.exports = mongoose.model("Breaker", breakerSchema)