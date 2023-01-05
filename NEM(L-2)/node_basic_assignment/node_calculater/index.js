var {add,sub,multi,div,ran,sinT,cosT,tanT}=require('./allFunction')
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

