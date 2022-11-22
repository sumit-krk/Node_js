const express=require("express");

const app=express();

app.get('/', (req,res)=>{
    res.send("Able to see express app");
})

app.get('/user', (req,res)=>{
    res.send({"Name":["sumit","Vishal"]})
})

app.listen(4500,()=>{
    console.log("listining on port 4500");
})