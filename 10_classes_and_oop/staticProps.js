class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

const himani = new User("himani")
// console.log(himani.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const sweetu = new Teacher("sweetu", "sweetu@gmail.com")
sweetu.logMe()
console.log(sweetu.createId())