import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const app=express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb is connected")
}).catch(err=>console.log("something wrong"))

app.listen(3000,()=>{
    console.log("server is listen")
})
app.get('/',(req,res)=>{
    res.json("hello")
})