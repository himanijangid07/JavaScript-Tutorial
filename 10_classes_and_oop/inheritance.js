class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const himani = new Teacher("himani", "himani@teacher.com", "123")

himani.addCourse()

const sweetu = new User("sweetu")
sweetu.logMe()

// console.log(himani === sweetu)

console.log(himani instanceof Teacher)