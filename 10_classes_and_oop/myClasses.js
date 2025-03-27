// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const himani = new User("himani", "himani@gmail.com", "123")

// console.log(himani.encryptPassword())
// console.log(himani.changeUsername())

// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const sweetu = new User("sweetu", "sweetu@gmail.com", "123")

console.log(sweetu.encryptPassword())
console.log(sweetu.changeUsername())