// let myName = "himani    "

// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function() {
    console.log(`hitesh says hello`)
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "himani",
    email: "himani@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "himani         "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"sweetu".trueLength()
"iceTea".trueLength()