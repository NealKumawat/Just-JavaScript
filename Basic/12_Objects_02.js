const user = {}
user.Id = "123abdc"
user.Name = "Neal"
user.isLoggedIn = false



// console.log(user);

const reguser = {email: "some@gmail.com",
    fullname: {
        firstname: "Neal",
        lastname: "Kumawat"
    }
}

console.log(reguser['fullname']['lastname']);
//or
console.log(reguser.fullname.lastname);

// Lets try to merge two Objects
console.log({user, reguser})    // This is making nested obj which we dont want

console.log(Object.assign({}, user, reguser));  // btw it returns value but we have directly used it in console.log()
// The above thing is used to assure that the objs would be assigned in an obj

// or
console.log({...user, ...reguser});


const sample = [
    {
        id: 1,
        email: "u1@gmail.com"
    },
    {
        id: 2,
        email: "u2@gmail.com"
    },
    {
        id: 3,
        email: "u3@gmail.com"
    },
]

console.log(sample[1].email);   // gives email of the object on first index
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'))