export function Getalltodos(url, res){
      mysqlConnection.query("SELECT * FROM todolist WHERE todoID = ?", url[1],(err, rows, fields)=>{

                    if(err) throw new Error(err.message)
                    res.end(JSON.stringify(rows))
                    console.log('test')
                   
                })
}