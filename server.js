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

// setting up an empty GET Route


// Starting Server on PORT
app.listen(PORT, () => console.log("Server started on PORT Number: " + PORT));
