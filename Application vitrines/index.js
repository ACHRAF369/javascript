const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")

dotenv.config();
app.use(express.json())



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(console.log("connected to mongodb"))
    .catch((err) =>console.log("not connected"))

app.use("/api/auth", authRoute)

app.listen('5000', () => {
    console.log('serve is running: http://localhost:5000');
})

