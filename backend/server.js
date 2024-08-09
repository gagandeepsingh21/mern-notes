const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const authRoutes = require("./routes/Auth");
const connectdb = require("./utils/dbConnection");


const app = express();
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use("/auth",authRoutes);

connectdb()  ;

app.get('/',(req,res) => {
    res.send("hello world!")
});


app.listen(port, console.log(`server started at port ${port}`))
