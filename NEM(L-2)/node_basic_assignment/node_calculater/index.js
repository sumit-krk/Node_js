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
