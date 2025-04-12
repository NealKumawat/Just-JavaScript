if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)   This would throw error coz it's work ended in the scopes above. It has no significant value here
// console.log(b)   Same reason as above
console.log(c)      //But this would cause no error
//Also note if c would already be declared before if would still take the value stored latest in it


//Anything in functions like if, else, etc are referred as block scope
// Anything outside the fuctions like above are called global scope