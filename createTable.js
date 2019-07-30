var mysqldb = require('mysql');
var connection = mysqldb.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'DBFromNode'
})
//connect to database
connection.connect((error)=>{
    if(error){
        console.log(error);
        throw error;
    }
    console.log("Connected to DBFromNode");
    var createTableQuery= `Create Table friends(name varchar(65), 
                            year int(8), location varchar(65), 
                            id int(8) auto_increment, primary key(id))`
    connection.query(createTableQuery,(error,success)=>{
        if(error)
        {
            throw error
            console.log(error);
        }
        console.log("friends Table is created");
    })
})