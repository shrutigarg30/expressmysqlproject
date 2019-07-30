var mysqldb = require('mysql');
var connection = mysqldb.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'DBFromNode',
    table: 'friends'
})

connection.connect((error)=>{
    if(error){
        console.log(error)
        throw error 
    }
    console.log("Connected to Friends table in DBFromNode database");

    var multipleInsertQuery = "insert into friends(name, year, location) values ?"
    var records =[
        ['shruti',1994,'chandigarh'],
        ['sakshi',1993,'ahmedabad'],
        ['gagan',1991,'moga']
    ]
    connection.query(multipleInsertQuery, [records], (error, success)=>{
        if(error){
            throw error
            console.log(error);
        }
        console.log(success);
        console.log("Records are inserted");
    })
})