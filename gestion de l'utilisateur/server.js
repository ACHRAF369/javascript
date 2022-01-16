const express = require('express');
const app = express();
const expehbs = require('express-handlebars')
const PORT = process.env.PORT || 8089;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
// app.engine()
app.listen(PORT, ()=>{
    console.log(`The server is listening on port: 127.0.0.1:${PORT}`)
})

