// Any type of values can be used in Arrays
// It makes shallow copies
// There r following ways to create arrays
const myArr = [0,9,87,43]
const Hero = ["Tung Tung Sahur", "Lirili Larila", "Bombardino Crocodilo", "Cuppacino Assasino", "Shimpanzini Bananini", "Trippi Troppa", "Frigo Camelo", "Tralelo Tralala"]
const myNewArr = new Array(4,34,345,53)

// Accessing them
console.log(myArr[0])

// Some most useful Properties
myArr.push(6) //to append value at last of the array
myArr.unshift(0) // to add value at the 0th index
//.pop()    is to remove the last value
//.shift()  is to remove the first value

console.log(myArr.includes(98))     // to check the existance of a value
const myArr02 = myArr.join()    // it changes the datatype to string
console.log(myArr02.length)     // length is 13: len of string
console.log(myArr.length)       // length is 6: no. of elements


console.log("A", myNewArr)

const myn1 = myNewArr.slice(1,3)    // No changes in main Arr and Range not included

console.log(myn1)

console.log("B", myNewArr)
const myn2 = myArr.splice(1,3)      // Changes in main Arr and Range included




/*
at
: 
ƒ at()
concat
: 
ƒ concat()
constructor
: 
ƒ Array()
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()
slice
: 
ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.unscopables)
: 
{at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
﻿

*/