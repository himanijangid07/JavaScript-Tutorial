const User = {
    _email: "h@hj.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const himani = Object.create(User)
console.log(himani.email)