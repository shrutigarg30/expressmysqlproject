var mysqldb = require('mysql');
var connection = mysqldb.createConnection({
    host: 'localhost',
    port:'3306',
    user: "root",
    password: ''
})
// connection.connect(function(error){
//     if(error){
//         console.log(error);
//         throw error
//     }
//     console.log("Connected to MySQL Server!!!");
//     var insertQuery ="insert into friend(id, name, years)"

//     connection.query(insertQuery, function(error, success){
//         if(error){
//             console.log(error);
//             throw error
//         }
//         console.log("1 row inserted");
//     })
// })
// for node
connection.connect((error)=>{
    if(error)
    {
        console.log(error);
        throw error
        
    }
    console.log("Connected to MYSQL databse!!!")
    //create database
    var createDbQuery = "Create database DBFromNode "
    connection.query(createDbQuery, (error, success) =>{
        if(error){
            console.log(error);
            throw error;
        }
        console.log("DBFromNode Database is created!!!");
    })
})