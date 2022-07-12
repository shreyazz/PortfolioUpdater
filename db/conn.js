const mongoose = require('mongoose');
require('dotenv').config();
const connectToDB = () => {
    const URI = process.env.MONGO_URI;
    mongoose.connect(URI, (err) => {
        if(err) console.log("can't connect to the DB 🔴")
        console.log('connected to the DB 🟢')
    })
}

module.exports = connectToDB;