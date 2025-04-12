function SayMyName(){
    console.log("N");
    console.log("E");
    console.log("A");
    console.log("L");
}
SayMyName()



function Add(a, b){// a, b are parameters
    console.log(a + b);
}

Add(4, 2) // 4,2 are arguments



function Add(a, b){
    c = a + b;
    return c
}
console.log(Add(34,53))



function jsi(name){
    if (name === undefined){
        console.log("Enter Valid Name");
    }
    else{console.log(`${name} just logged in`);}
}
jsi()



// By default
function js2(name = "Sam"){
    console.log(`${name} just logged in`)
}
js2("Neal")



// USING REST OPERATORS (...)
function CalculateCartPrice(...num){
    return num  // This would create an array of all the mentioned value at the time of calling this function
    return num
}
console.log(CalculateCartPrice(23,43,53,53,12,43));



function CalculateCartPrice01(val1, val2, ...num){
    return num  // Isme at the time of calling the function pehla argument would be assigned to val1, 2nd to val2 and rest would be added into the array called num
    return num
}
console.log(CalculateCartPrice01(23,53,645,643,2334,434));




const user = {
    username: "Neal",
    price: "345"
}

function FinalPrice(a){
    console.log(`${a.username} has to pay an amount of Rs.${a.price}`);
}
FinalPrice(user)