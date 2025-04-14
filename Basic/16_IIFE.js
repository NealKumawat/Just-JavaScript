/* IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
This is used when u want to execute a funtion immediately while running a program*/

// Below is an eg of Named IIFE
(function chai(){
    console.log("Database Connected");
})(); // use semicolon

//or

// Below is an example of Unnamed IIFE
( () =>{
    console.log("DB connected");
}) ();

// let's see one more example

// Let's pass parameter
((name) => {
    console.log(`DB connected ${name}`);
}) ('Neal')

// U just need to wrap ur funtion into ( ) and call it after defining immediately by ()
// Imp: This is also used to treat the pollution caused by global scope