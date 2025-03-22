const user = {
    username: "himani",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`)
        // console.log(this) // this will return the current context
    }
}

// user.welcomeMessage()
// user.username = "sumit"
// user.welcomeMessage()

// console.log(this)

// function one() {
//     let username = "himani"
//     console.log(this.username)
// }

// one()

// const one = function() {
//     let username = "himani"
//     console.log(this.username)
// }

const one = () => {
    let username = "himani"
    console.log(this.username)
}

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "himani"})

// console.log(addTwo(4, 5))

const myArray = [2, 3, 4, 5, 5]

// myArray.forEach()