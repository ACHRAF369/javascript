const mysql = require('mysql');
const http = require('http');
const bodyparser = require('body-parser')

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  }
  
  const server = http.createServer(requestListener);
  server.listen(8080);

const mysqlConnection = mysql.createConnection({
host:'localhost',
user : 'root',
password: '',
database:'todolist'
});
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('BD connection succeded.')
    else
    console.log('DB connection failed \n eroor' + JSON.stringify(err,undefined,2));
});

