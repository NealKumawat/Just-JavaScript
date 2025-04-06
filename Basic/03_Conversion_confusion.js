// Just like Typecasting in Python, here we call it Conversion
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
console.log(out_score_4);   //#43
console.log(out_score_5);   //#1
console.log(out_score_6);   //#NaN

//if once coversion is done let it be on string or any other thing it would become number

/*If the conversion is done to Boolean, following would be the outcome
1 - true
2 - false
"" - false
"Neal" - true