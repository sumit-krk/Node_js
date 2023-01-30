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
    else if(request.url==="/reports"){
        response.setHeader("content-type","text/html");
        response.end("<h1>sended html response</h1>");
    }
    else{
        response.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        })
        response.end("<h1>Invalid Url<h1/>");
    }
})

server.listen(4600,()=>{
    console.log("server listning on port 4500");
})