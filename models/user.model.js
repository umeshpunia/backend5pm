const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    registerOn:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("user",UserSchema);