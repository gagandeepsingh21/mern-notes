const mongoDb = require("mongoose");

const connectdb = async () =>{
    try{
        const connect = await mongoDb.connect(process.env.CONNECTION_STRING)
        console.log("Connected Successfully to", connect.connection.name)
    }catch(err){
        console.log(err) 
    }
} 

module.exports = connectdb