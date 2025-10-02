const mongoose = require("mongoose");

const tiffinSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    college:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        required:true,
    }
    
},
{timestamps:true})


const Tiffin = mongoose.model("Tiffin",tiffinSchema);

module.exports = Tiffin;