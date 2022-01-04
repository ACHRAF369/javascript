// let mysql2 = require('mysql2')
let http = require('http')
let data = require('./data')
port = 1000

let app = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'application.json'})
    res.write(data.data)
    res.end
    
})

app.listen(port, ()=>{
    console.log(`server open on: http://localhost:${port}`);
})