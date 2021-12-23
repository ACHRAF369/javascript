//required packages
const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

//create the express server
const app = express();

//server port number
const PORT = process.env.PORT || 3000;

//start the server 
app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
})