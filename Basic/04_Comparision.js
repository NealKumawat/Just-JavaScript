// You already know about comparision operators
// Let's see some confusing egs

console.log("2" > 1);   //#true
console.log("02" > 1);   //#true
console.log(null > 0);   //#false
console.log(null == 0);   //#false
console.log(null >= 0);   //#true

// if u compare undefined it will give false

// === is called strict check, this also checks datatypes and do not convert datatypes