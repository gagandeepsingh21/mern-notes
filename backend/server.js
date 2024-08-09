const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const mongoose = require("mongoose");
const authRoutes = require("./routes/Auth");
const app = express();
const port = process.env.PORT || 5000

// app.use(express.json())
// app.use(cors())
app.use("/auth",authRoutes)
const connectdb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected Successfully to", connect.connection.name)
    }catch(err){
        console.log(err) 
    }
} 
connectdb() 

app.get('/',(req,res) => {
    res.send("hello world!")
})


app.listen(port, console.log(`server started at port ${port}`))
