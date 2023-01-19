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

app.post("/addstudent",(req,res)=>{
    // read the data first
    const data=fs.readFileSync("./db.json","utf-8")
    // parsing the data to add a new student
    const parsed_data=JSON.parse(data);
    //adding the new student
    parsed_data.name.push(req.body)
    //write in the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    res.send("database update");
})

app.listen(3500,()=>{
    console.log("server listing on 3500 port")
})