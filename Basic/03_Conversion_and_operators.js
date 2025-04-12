// Just like Typecasting in Python, here we call them Conversions
// Let's assign a variable and Convert that

let score_1 = "43"
let score_2 = "43abc"
let score_3 = null
let score_4 = undefined
let score_5 = true
let score_6 = "Neal"

let out_score_1 = Number(score_1)
let out_score_2 = Number(score_2)
let out_score_3 = Number(score_3)
let out_score_4 = Number(score_4)
let out_score_5 = Number(score_5)
let out_score_6 = Number(score_6)

console.log(out_score_1);   //#43
console.log(out_score_2);   //#NaN
console.log(out_score_3);   //#0
console.log(out_score_4);   //#NaN
console.log(out_score_5);   //#1
console.log(out_score_6);   //#NaN

//If once coversion is done, let it be any DataType its type would become number

/*If the conversion is done to Boolean, following would be the outcome
1 - true
2 - false
"" - false
"Neal" - true


********************OPERATIONS**********************/

// Example 1
let value = 3
let nvalue = -value //#-3

// u can use concatinarion as well
// Below are some confusing egs
console.log("1" + 2)    //#12
console.log(1 + "2")    //#12
console.log("1" + 2 + 3)    //#123
console.log(1 + 2 + "3")    //#33
console.log(+true)  //#1
// console.log(true+)  //#error
console.log("")     //#0


let x = 3;
const y = x++;
// here y was assigned x first and x was incremented later
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
// here y was assigned x later and x was incremented firstly
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"