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

//++++++++++++++++++++INTERESTING STUFF++++++++++++++++++++++++

// There are two ways to declare a function like below

add1(3)     // THIS CAN BE CALLED ANYWHERE
function add1(num){
    return num + 1
}


// add2(3)      THIS WOULD THROW AN ERROR
const add2 = function(num){
    return num + 2
}
// THIS HAS TO BE CALLED AFTER DECLARATION