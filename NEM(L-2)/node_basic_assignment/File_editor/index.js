const fs=require('fs');
const arguments=process.argv;
if(arguments[2]=="read"){
    fs.readFile(`./${arguments[3]}`,{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log("file cannot be read");
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
}
