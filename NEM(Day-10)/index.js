const express=require("express");
const { connection } = require('./db')

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page");
})

app.post("login",()=>{
    res.send("Logdin");
})

app.post("/register",(req,res)=>{
    res.send("registered");
})

app.listen(4000,async()=>{
    await connection
    console.log("listening on port 40000");
})