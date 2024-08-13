const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title:{
        type:String,
    },
    userId:{
        type:String,
    }
},{
    timestamps:true
})
const notesModel = mongoose.model("Note",notesSchema)

module.exports = notesModel