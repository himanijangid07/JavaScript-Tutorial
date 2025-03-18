const accountId = 144553
let accountEmail = "himani@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed for const

accountEmail = "sweetu@google.com"
accountPassword = "sweetu123"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var
because of issue in block scope
and functional scope
*/