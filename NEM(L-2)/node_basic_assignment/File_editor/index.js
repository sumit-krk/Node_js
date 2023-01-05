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
console.log(arguments)
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
