let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}


let marr = ['Samosa', 'Kachori', 'Jalebi']
let arr = 0
while (arr < marr.length) {
    console.log(`Value of my Arr is ${marr[arr]}`);
    arr ++
}



let score = 1
do {
    console.log(`Score is ${score}`);
    score = score + 2
} while (score <= 10);



//ARRAY SPECIFIC LOOPS

// for of loop
const array = [1,2,3,4,5];
//for (const element of object) {
    
//}   // this is the syntax of forof loop; element is variable like (i) and obj is anything on which loop is on

for (const i of array) {
    console.log(i);
}   // it would just run as a normal loop without jumps




//MAP: No duplicate values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
// Now if you loop into this using for of then

for (const key of map) {
    console.log(key);
}

/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]*/

// but we didn't want it this we; so to destructure them we will use []

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// If we do the same thing with objects, we will get an error stating that objects are not iteratable
// There are ways to make them iteratable we'll know later




// for in loop

// We can use it on objects
const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

/*
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}
This is the syntax of how it looks      */

for (const key in myobj) {
    console.log(`${key} represents ${myobj[key]}`);
}
/*
js represents javascript
cpp represents C++
rb represents ruby
swift represents swift by apple                 */

// If we use it in arrays then let's check out

const array1 = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in array1) {
    console.log(key);
}// 0   1   2   3   4


for (const key in array1) {
    console.log(array1[key]);
}// js  rb  py  java  cpp

// if we use for in by Maps then as Maps are not iteratable we would get nothing (not even an error)




// For Each loop

const code = ['js', 'rb', 'py', 'java', 'cpp']
code.forEach( function (i){
    console.log(i);
    
} )

// If we already have a function and we want to use that function on an array using the for each loop then

function printMe(i){
    console.log(i);
}

code.forEach(printMe)           // Remember you are not calling printMe, you are just giving reference so don't use () after the function name

// Let me tell you that there is not only the a function as a parameter but also indexes and also the whole array

code.forEach( (item, index, array1) => {
    console.log(item, index, array1);
    
} )                             /*
js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]               */




//  WATCH VIDEO 29 TO COMPLETE