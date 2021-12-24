
//required packages
const express = require("express");
// const fetch = require("node-fetch");
require("dotenv").config();

//create the express server
const app = express();

//server port number
const PORT = 3030;

app.set("view engine", "ejs");

app.use(express.static("public"))

app.use(express.urlencoded({
    extended:true

}))

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index")

})

app.post("/", (req, res) => {
   
})


//start the server 
app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);   
    
})
