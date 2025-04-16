/********************* IF-ELSE STATEMENT *****************************/
const n = false
if (n){
    console.log("Hnji");
}
else {
    console.log("Hejiii");
}




/****************** IMPLICIT SCOPE **************************/
if (2332 > 332) console.log("Samsung"); // Is good to use

if (232 > 32) console.log("Prr Prr"), console.log("Patapim"); // Is bad to use

// else if


const user = true
const one = true

if (user && one && 2 == 2) {
    console.log("Swagat hai");
}

if (user || 2 == 2 || 3 == 4){
    console.log("|| us used for OR");
}




//********************** SWITCH CASE ****************************************
const m = 5
switch (m) {
    case 1:
        console.log("1 h");
        break;
    case 2:
        console.log("2 h");
        break;
    case 3:
        console.log("3 h");
        break;
    case 4:
        console.log("4 h");
        break;

    default:
        console.log("Ab ky hi pata");
        
        break;
}




/******************* TRUTHY AND FALSY ************************* 
Some values are assumed to be already true
For eg                                                                          */

const usermail = "anything" 

if (usermail) console.log("Got the Mail");
else console.log("Didn't got the mail");

/* FALSY values:
    =>  false
    =>  0
    =>  -0
    =>  BigInt
    =>  ""
    =>  null
    =>  undefined
    =>  NaN

TRUTHY values
    =>  "0"
    =>  'false'
    =>  " "
    =>  []
    =>  {}
    =>  function(){}                                            */

if (usermail.length == 0) {
    console.log("Galat h");
}


const empObj = {}

if (Object.keys(empObj).length === 0) {
    console.log("Khaali Object");
}




/************ NULLISH COALESCING OPERATOR *************/
//?? is called Nullish Coalescing operator
let val1;
val1 = 5 ?? 10 ?? 15    // First value
val2 = null ?? 10       // Ignores null or undefined
val3 = undefined ?? 15


console.log(val1);
console.log(val2);
console.log(val3);




/***************** TERNIARY OPERATOR **************************
Kinda substitute for if else                                            */

34 <= 32 ? console.log("Less than 32") : console.log("More than 32");