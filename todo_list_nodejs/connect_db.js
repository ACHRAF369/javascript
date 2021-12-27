var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",

});


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
 //***********INSERT*************/
    // var insert = "INSERT INTO todos (titel, discreption) VALUES ('first_todos', 'discreption****DISCRePTION')";
    // con.query(insert, function (err, ) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });
    
    var sql = "DELET FROM todos WHERE titel = 'first_todos'"
     con.connect(sql, function(err, result){

       if (err) throw err;
       
       console.log("Number of records deleted: " + result.affectedRows);

     })

});



