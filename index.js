var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser')
var cors = require('cors')
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'DBFromNode',
})

connection.connect((error)=>{
    if(error){
        throw error
        console.log(error);
    }
    console.log("Connected to DBFromNode");
})

var expressApp = express()
expressApp.use(bodyParser.json())
expressApp.use(cors())
expressApp.get("/all", (request, response)=>{

    
    // response.send('All friends: <br>')
     var selectAllQuery="Select * from friends"
     connection.query(selectAllQuery,(error, success)=>{
         if(error){
             throw error;
             console.log(error)
         }
    //     console.log(success);
         response.send(JSON.stringify(success));
         //connection.end(); 
         response.end();    
       
    })
})
expressApp.get("/friend/:id", (request, response)=>{
    console.log(request);
    console.log("Received: "+ request.params.id);
    //response.send("Friend Details: <br>")
    var selectFriendByIDQuery= "select * from friends where id=?"
    connection.query(selectFriendByIDQuery, request.params.id, (error,success)=>{
        if(error){
            throw error;
            console.log(error);
        }
        response.json(success)
        console.log(JSON.stringify(success))
        
        response.end();
    })
})

expressApp.post("/add", (request, response)=>{
    console.log("Post request received");
    console.log(request.body);
    console.log("Name: "+request.body.name)
    console.log("Location: "+request.body.location)
    console.log("Year: "+request.body.year); 
})

expressApp.listen(1234);