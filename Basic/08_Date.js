let myDate = new Date()

console.log(myDate);
// 2025-04-07T12:01:20.359Z

console.log(myDate.toString());
// Mon Apr 07 2025 12:05:58 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
// Mon Apr 07 2025

console.log(myDate.toLocaleDateString());
// 4/7/2025

console.log(myDate.toLocaleString());
// 4/7/2025, 12:05:58 PM

console.log(myDate.getTimezoneOffset());
// 0

console.log(myDate.toJSON());
// 2025-04-07T12:05:58.772Z

console.log(myDate.toTimeString());
// 12:05:58 GMT+0000 (Coordinated Universal Time)



console.log(typeof myDate);
// object

let NewDate = new Date(2025, 0, 31)
console.log(NewDate.toString());
//Fri Jan 31 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

// In just above January was started from 0 but if we write it like
let NewDate01 = new Date(2025-01-14)
console.log(NewDate01.toString());
// Thu Jan 01 1970 00:00:02 GMT+0000 (Coordinated Universal Time)

console.log(NewDate.getTime())
// 1738281600000
// The above big no. is the milliseconds passed from 1970 till the date mentioned in the variable

console.log(Date.now())
// This will give time in millisecond
// If u want to check in sec then 
console.log(Math.floor(Date.now()/1000));

//Most Imp
console.log(NewDate.toLocaleString('default', {
    // click ctrl+space here
    calendar: "gregory", // just a type of calender
    weekday: "narrow"
}));
// #F





// ctrl+space for properties