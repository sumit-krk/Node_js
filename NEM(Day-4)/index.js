const { readFile } = require('fs');
const http=require('http');
const fs=require('fs');

const server=http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("This is home page");
    }
    else if(request.url==="/data"){
        fs.readFile("./data.json",(err,data)=>{
            if(err){
                response.write(err);
                response.end();
            }
            else{
                response.end(data);
            }
        })
    }
    else{
        response.end("Invalid Url");
    }
})

server.listen(4600,()=>{
    console.log("server listning on port 4500");
})