const score = 5000000
console.log(score);
// This would just give 5000000

const balance = new Number(299)
console.log(balance);
// This would specify and give the number 299

console.log(balance.toFixed(2))    //#299.00

console.log(balance.toPrecision(4))     //#299.00
console.log(balance.toPrecision(3))     //#299.0
console.log(balance.toPrecision(2))     //#3.0e+2


console.log(score.toLocaleString())     //By Default in Int NS
console.log(score.toLocaleString('en-IN'))      //In Indian NS






/*
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
*/