const mongoose=require("mongoose");

const main=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/class");
        await studentModel.insertMany([{name:'kusha kumar',age:24,city:'Lakhisarai',is_marrid:false}]);
        console.log("Added to db");
        console.log("Connected to db")
        connection.disconnect();
        console.log("disconnected");
    }catch{
        console.log("opps!! something went wrong...")
    }
}

const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    is_marrid:Boolean
},{
    versionKey:false
})

const studentModel=mongoose.model("student",studentSchema);

main();