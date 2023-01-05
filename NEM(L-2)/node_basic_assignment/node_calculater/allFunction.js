const {randomInt}=require("crypto");
function add(a, b) {
    // To extract number from string
    return parseInt(a)+parseInt(b) 
} 
function sub(a, b) {
    // To extract number from string
    return parseInt(a)-parseInt(b) 
}
function multi(a, b) {
    // To extract number from string
    return parseInt(a)*parseInt(b) 
}
function div(a, b) {
    // To extract number from string
    return parseInt(a)/parseInt(b) 
}
function ran(a,b){
    return randomInt(parseInt(a),parseInt(b));
}
function sinT(a){
    return Math.sin(parseInt(a));
}
function cosT(a){
    return Math.cos(parseInt(a));
}
function tanT(a){
    return Math.tan(parseInt(a));
}
module.exports={add,sub,multi,div,ran,sinT,cosT,tanT}