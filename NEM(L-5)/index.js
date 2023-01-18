const express=require('express');

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.end("Hello express");
})

app.post("/addData",(req,res)=>{
    console.log(req.body);
    res.end("Data has been sent");
})

app.listen(3500,()=>{
    console.log("server listing on 3500 port")
})