const express=require('express');
const fs=require("fs");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.end("Hello express");
})

app.post("/addData",(req,res)=>{
    console.log(req.body);
    res.end("Data has been sent");
})

app.get("/getData",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parse_data=JSON.parse(data);
    console.log(parse_data);
    res.send("you goat data in terminal");
})

app.listen(3500,()=>{
    console.log("server listing on 3500 port")
})