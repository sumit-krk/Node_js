const express=require("express");

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

app.listen(4000,()=>{
    console.log("listening on port 40000");
})