const user = {
    username: "Himani",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details from details')
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("himani", 12, true)
const userTwo = new User("sweetu", 11, false)

console.log(userOne)

// when you write new keyword it creates a new object
// constructor function is called
// all the variables are passes