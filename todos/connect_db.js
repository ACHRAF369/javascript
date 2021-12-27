var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tododb'
});

 
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE todoNodos node(name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err) {
    //   if (err) throw err;
    //   console.log("Table created");
    });

con.connect(function(err) {

    if (err) throw err;
            var sql = "DELETE FROM todos WHERE title = 'first_todos'";

            con.query(sql, function (err) {

                if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);

            });

            con.query("CREATE TABLE todos (titel VARCHAR(255),desc VARCHAR(243))", function (err) {

                if (err) throw err;
                console.log("table is create");
                
            });


      })

// connection.end();