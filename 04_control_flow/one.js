// if

const temperature = 42

if(temperature === 42) {
    // console.log("temperature is less than 50")
} else {
    // console.log("temperature is greater than 50")
}

// console.log("Execute")

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`)
}

// console.log(`User power: ${power}`)

const balance = 1000

// if (balance > 5000) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("greater than 900")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}