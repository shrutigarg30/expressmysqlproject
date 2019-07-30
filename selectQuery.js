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
    var getAllFriendsQuery="select * from Friends";
    connection.query(getAllFriendsQuery,(error, success)=>{
        if(error){
            console.log(error);
            throw error;
        }
        console.log(success);
        console.log(JSON.stringify(success));
    })
})