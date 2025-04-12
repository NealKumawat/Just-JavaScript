// creating a symbol
const mySym = Symbol("key1")


// object literals:- The way to assign or create objects
// const jsuser = new Object()
// or

const jsuser = {
    FName: "Neal",
    "L Name": "Kumawat",
    [mySym]: "mykey1",
    Age: 19,
    loc: "Jaipur",
    email: "neal@gmail.com",
    IsLoggedIn: false,
    LastLoginDays: ["Monday", "Thursday"]}

// Accessing the values:
console.log(jsuser.email);  //Try to use this method while accessing
//neal@gmail.com
console.log(jsuser["email"]);   
// console.log(jsuser.L Name);      This would throw error
console.log(typeof jsuser[mySym]);


// Changeing the Values
jsuser.email = "nealkumawat@gmail.com"



// If u want to make no changes in some thing then

//There is not pre-existing method to freeze the value of a key so we use the method below which changes the property of an object
Object.defineProperty(jsuser, "email", {writable: false})
jsuser.email = "nealkumawat04@gmail.com"

// To completely freeze the object
// Object.freeze(jsuser)
// jsuser.FName = "Neal Ji"    // NO CHANGE

console.log(jsuser);



// CREATING FUNCTIONS:- Similar as assigning a variable

jsuser.greeting = function(){
    console.log("Hello Ji")
}


console.log(jsuser.greeting);
console.log(jsuser.greeting());



jsuser.greeting2 = function(){
    console.log(`Hello ${jsuser['FName']} ji, kese h aap?`)
}

console.log(jsuser.greeting2);
console.log(jsuser.greeting2());