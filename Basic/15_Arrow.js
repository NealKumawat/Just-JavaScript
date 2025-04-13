const user = {
    username: "Neal",
    price: 999,
    welcomemsg: function() {
        console.log(`${this.username}, welcome Bhai`); // THIS IS FOR CURRENT CONTEXT
        // console.log(this);   idhar this is referred to the whole object named "user"
        
    }
}


user.welcomemsg()
user.username = "Sam"
user.welcomemsg()

console.log(this);  //{}
// Here 'this' is referred to an empty object
// Agar same cheez browser m krte h to we get "window" as a result
// It is coz initially js was to be run only on browser


// Now let's see something very interesting
function chai() {
    console.log(this);
    let username = "Neal"
    // console.log(this.username);  #undefined  THIS CAN'T BE USED IN FUNCTIONS, ONLY IN OBJECTS
    
}
// chai()
// We'll get too much data in the terminal, this tells that there truly is something in 'this'.


//Arrow funtions
// just a new and short way to declare functions
// There r 2 ways to declare arrow funtions as well
const add2 = (a,b) => {
    return a + b
}

// or

const add1 = (a,b) => a + b 
 // isme directly {} lagaya toh error aega

// curly braces m wrap kra toh return keyword likhna padega but paranthesis ya ese hi chhod diya toh nhi