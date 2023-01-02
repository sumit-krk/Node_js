const http=require('http');

const server=http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("This is home page");
    }
    else if(request.url==="/data"){
        response.end("Data will be here");
    }
})

server.listen(4500,()=>{
    console.log("server listning on port 4500");
})