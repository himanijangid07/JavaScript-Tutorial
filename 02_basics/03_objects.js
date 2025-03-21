// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Himani",
    [mySym]: "mykey1", // it is the way of using a symbol to create a key in the object
    age: 20,
    location: "Jaipur",
    email: "himani@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email = "himani@microsoft.com"
// Object.freeze(JsUser)

JsUser.email = "himani@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS User")
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greetingTwo())