const fs=require('fs');
const arguments=process.argv;
// if(arguments[2]=="read"){
//     fs.readFile(`./${arguments[3]}`,{encoding:'utf-8'},(err,data)=>{
//         if(err){
//             console.log("file cannot be read");
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//     })
// }

if(arguments[2]=="read"){
    let data;
    try{
        data=fs.readFileSync(`./${arguments[3]}`,{encoding:'utf-8'});
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
else if(arguments[2]=="append"){
    try{
        fs.appendFileSync(`./${arguments[4]}`,`${arguments[3]}\n`);
    }catch(err){
        console.log(err)
    }
}
else if(arguments[2]=="delete"){
    try{
        fs.unlinkSync(`./${arguments[3]}`);
        console.log("file deleted")
    }catch(err){
        console.log(err)
    }
}
else if(arguments[2]=="create"){
    try{
        fs.writeFileSync(`./${arguments[3]}`,'Hi');
        console.log("file created")
    }catch(err){
        console.log(err)
    }
}
else if(arguments[2]=="rename"){
    try{
        fs.renameSync(`./${arguments[3]}`,`./${arguments[4]}`);
        console.log("file rename")
    }catch(err){
        console.log(err)
    }
}
else{
    console.log("command not valid");
}
