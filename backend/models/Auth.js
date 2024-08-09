const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
},{timestamps:true})

const userModel = mongoose.model("User",UserSchema)

module.exports = userModel