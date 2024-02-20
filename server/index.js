import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from 'body-parser'
import signUp from "./routes/signUp.js"
import signIn from "./routes/signIn.js"
import updateMoney from "./routes/UpdateMoney.js"
import cors from "cors"
dotenv.config()
const app=express();
app.use(bodyParser.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb is connected")
}).catch(err=>console.log("something wrong"))

app.listen(3000,()=>{
    console.log("server is listen")
})

//This is test api
app.get('/',(req,res)=>{
    res.json("hello")
})

//This is for signUp api
app.use('/auth',signUp)

//This is signIn api
app.use('/validateAuth',signIn)

//This is for update money api
app.use('/UpdateMoney',updateMoney)
