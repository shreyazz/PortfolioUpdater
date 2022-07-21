const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    workInProgress: {
        type: Boolean,
        required: true
    },
    useLink: {
        type: String,
    },
    repoLink: {
        type: String
    }
})



module.exports = mongoose.model('projects',projectSchema);