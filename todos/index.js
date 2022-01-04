
const mysql = require('mysql2');
const http = require('http');
const bodyparser = require('body-parser');
// const { append } = require('vary');



const mysqlConnection = mysql.createConnection({
host:'localhost',
user : 'root',
password: '',
database:'todolist'
});


const requestListener = function (req, res) {
    const url = req.url.slice(1).split('/')
    console.log(url);
    if(url[0] == "todolists" && url[1]){
        switch (req.method) {
            case 'GET':
                
           mysqlConnection.query("SELECT * FROM todolist WHERE todoID = ?", url[1],(err, rows, fields)=>{

                    if(err) throw new Error(err.message)
                    res.end(JSON.stringify(rows))
                    console.log('test')
                   
                })

            

                break;
            case 'PUT':
                mysqlConnection.query("UPDATE todolist WHERE id = ?", url[1],(err, rows, fields)=>{

                    if(err) throw new Error(err.message)
                    
                    console.log('test')
                   
                })
                break;
            case 'DELETE':
                deleteTask(url[1],res)
                break;
        }
    }
    else if(url[0] == "todolists"){

        switch (req.method) {
            case 'GET':
                getTasks(res)
                break;
            case 'POST':
                patchTask(url[1],req,res)
                break;
        } 
          
    }

    if(req.url == '/todolists' && req.method == 'GET'){

        mysqlConnection.query('SELECT * FROM todolist ', (err, rows, fields)=>{

            if(err) throw new Error(err.message)
            res.end(JSON.stringify(rows))
            console.log('test')

        })
        

    } 

    
    // else if(req.url == '/todolist/:id' ) {
    //   // app.get('/todolist/:id', (req, res) => {
    // mysqlConnection.query('SELECT * FROM todolist WHERE todoID = ?', [req.params.id], (err, rows, fields) => {
    //     if (!err)
    //         res.send(rows);
    //     else
    //         console.log(err);
    // // })
// });
    // }
    
}
  

  const server = http.createServer(requestListener);
  server.listen(8080 , ()=>console.log('server 8080 connect'));

