const Account_id = 344
var Account_pass = "123@456"
let User_State;     // here User_State is an empty variable

// var is not used now coz of the scope ("{}").
// Initially if in this let us say Account_pass is made and assigned but if in a for loop the same variable is defined and changed, this would change the main variable at all places.

console.log(Account_id);
console.log(Account_pass);
console.log(User_State);

console.table([Account_id, Account_pass, User_State])