const express=require("express");
const { connection } = require('./db')
const { userModel } =require('./models/user.model')

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page");
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
   try{
    const user=await userModel.find({email,password})
    if(user.length>0){
        res.send("logdin sussefully")
    }else{
        res.send("No valid user");
    }
    console.log(user);
   }catch(err){
        console.log("something went wrong");
        console.log(err);
   }
})

app.post("/register",async(req,res)=>{
    const payload=req.body
    try{
        const user=new userModel(payload)
        await user.save()
        res.send("registered");
    }
    catch(err){
        console.log("something wrong in register")
        console.log(err)
    }
})

app.listen(4000,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log("something went wrong")
        console.log(err)
    }
    console.log("listening on port 40000");
})