const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectToDB = require('./db/conn')
// middlewares
app.use(cors());
app.use(express.json());

// defining port
const PORT = process.env.PORT || 3001;

// connection to the DB
connectToDB();


// middlewares for routes

app.use('/api/addProject', require('./routes/addProject'));
app.use('/api/getProjects', require('./routes/getProjects'));

// setting up an empty GET Route
app.get('/', (req, res) => {
    res.send('Portfolio Updater API is working');
})

// Starting Server on PORT
// remove in prod
// app.listen(PORT, () => console.log("Server started on PORT Number: " + PORT));


// remove in dev
module.exports = app