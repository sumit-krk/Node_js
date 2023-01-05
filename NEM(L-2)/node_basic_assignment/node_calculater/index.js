const {randomInt}=require("crypto");
var arguments = process.argv
if(arguments[2]=='add'){
    var sum = add(arguments[3], arguments[4])
    console.log(`Addition of ${arguments[3]} and ${arguments[4]} is ${sum}`);
}
else if(arguments[2]=='sub'){
    var sub = sub(arguments[3], arguments[4])
    console.log(`subtraction of ${arguments[3]} and ${arguments[4]} is ${sub}`);
}
else if(arguments[2]=='multi'){
    var multi = multi(arguments[3], arguments[4])
    console.log(`multplication of ${arguments[3]} and ${arguments[4]} is ${multi}`);
}
else if(arguments[2]=='div'){
    var div = div(arguments[3], arguments[4])
    console.log(`division of ${arguments[3]} and ${arguments[4]} is ${div}`);
}
else if(arguments[2]=='random'){
    var random=ran(arguments[3],arguments[4])
    console.log(`random number between ${arguments[3]} and ${arguments[4]} is ${random}`);
}
else if(arguments[2]=='sin'){
    var sin=sinT(arguments[3]);
    console.log(`value is sin${arguments[3]} is ${sin}`);
}
else if(arguments[2]=='cos'){
    var cos=cosT(arguments[3]);
    console.log(`value is cos${arguments[3]} is ${cos}`);
}
else if(arguments[2]=='tan'){
    var tan=tanT(arguments[3]);
    console.log(`value is tan${arguments[3]} is ${tan}`);
}
else{
    console.log('Invalid input');
}
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
