class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return `${this._password}himani`
    }

    set password(value) {
        this._password = value
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        return this._email= value
    }
}

const himani = new User("himani@gmail.com", "abc")
console.log(himani.password)
console.log(himani.email)