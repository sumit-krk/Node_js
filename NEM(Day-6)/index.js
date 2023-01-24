const express=require("express");
const app=express();
const fs=require("fs");

// app.use((req,res,next)=>{
//     if(req.url=='/about'){
//         console.log("You are in correct route");
//         next();
//     }
//     else{
//         res.send("Route no avilable")
//     }
// })

const TimeLogger=(req,res,next)=>{
    let startTime=new Date().getTime();
    next();
    let endTime=new Date().getTime();
    console.log(endTime-startTime)
}

app.use(TimeLogger)

app.get("/",(req,res)=>{
    res.send("I am home page")
})

app.get("/about",(req,res)=>{
    console.log("about page")
    res.send("<h1>This is about page</h1>")
})

app.get("/data",(req,res)=>{
    let data=fs.readFileSync("./dummy.txt","utf-8")
    res.send(data);
})

app.listen(3600,()=>{
    console.log("listing on port 3600");
})