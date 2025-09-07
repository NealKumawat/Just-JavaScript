const MarvHeroes = ["Thor", "IronMan", "Spidy"]
const DCHeroes = ["Superman", "Flash", "Batman"]

MarvHeroes.push(DCHeroes)
console.log(MarvHeroes);
// Here above DCHeroes are added into MarvHeroes as a nested list or nested Array
// If we want to access Flash then the syntax would be
console.log(MarvHeroes[3][1])


// To avoid nested Array we can use the following method
let MarvHeroes1 = ["Thor", "IronMan", "Spidy"] // Know this it is assigned by let
const DCHeroes1 = ["Superman", "Flash", "Batman"]

MarvHeroes1 = MarvHeroes1.concat(DCHeroes1)
console.log(MarvHeroes1);
// OR
// The below method is called Spread
const Heroes = [...DCHeroes1, ...MarvHeroes1]
console.log(Heroes);


const sample = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const simplified = sample.flat(Infinity)    // All nested are now non nested
const simplified1 = sample.flat(1)  // Things in bracket is depth (out to in)
const simplified2 = sample.flat(2)

console.log(simplified);
console.log(simplified1);
console.log(simplified2);


console.log(Array.isArray(simplified));
//True
console.log(Array.isArray(5));  // isArray checks that if the given element is an array or not
//False
console.log(Array.from("Neal"));    // Creates new Array having elements as N, e, a, l
console.log(Array.from({name: "Neal"}));    // Is an interesting case
// empty Array


let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3));
// Returns set of array