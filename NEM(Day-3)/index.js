const fs=require("fs");
const path=require("path");
const dirPath=path.join(__dirname,'files');
console.log(dirPath);
for(let i=0;i<5;i++){
    fs.writeFileSync(dirPath+`/file${i}.txt`,`I am ${i}`);
}

fs.readdir(dirPath,(error,files)=>{
    files.forEach((items)=>{
        console.log(items)
    })
})