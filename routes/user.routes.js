const express=require("express")
const UserSchema=require("../models/user.model")



const router=express.Router()

router.get("/",(req,res)=>{
    res.send("User API")
})

router.post("/register",(req,res)=>{
    
})

module.exports=router