const express=require("express");
const app=express();

app.use((req,res,next)=>{
    if(req.url=='/about'){
        console.log("You are in correct route");
        next();
    }
    else{
        res.send("Route no avilable")
    }
})

app.get("/",(req,res)=>{
    res.send("I am home page")
})

app.get("/about",(req,res)=>{
    console.log("about page")
    res.send("<h1>This is about page</h1>")
})

app.listen(3600,()=>{
    console.log("listing on port 3600");
})