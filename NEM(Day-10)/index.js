const express=require("express");
const { connection } = require('./db')
const { userModel } =require('./models/user.model')
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page");
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
   try{
    var token = jwt.sign({ course: 'backend' }, 'masai');
    const user=await userModel.find({email,password})
    if(user.length>0){
        res.send({"msg":"logdin sussefully","token":token})
    }else{
        res.send("No valid user");
    }
    console.log(user);
   }catch(err){
        console.log("something went wrong");
        console.log(err);
   }
})

app.get("/data",(req,res)=>{
    const token=req.headers.authorization;
    jwt.verify(token, 'masai', (err, decoded)=> {
        if(err){
            res.send("Invalid Token");
            console.log(err);
        }
        else{
            res.send("...data");
        }
      });
})

app.post("/register",async(req,res)=>{
    const {name,email,password,mobile}=req.body
    try{
        bcrypt.hash(password, 5, async(err, secure_password)=> {
            if(err){
              console.log(err);  
            }
            else{
                const user=new userModel({name,email,password:secure_password,mobile})
                await user.save()
                res.send("registered");
            }
        });
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