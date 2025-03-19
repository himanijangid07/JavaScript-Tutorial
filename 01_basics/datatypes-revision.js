// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue =  100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 4594984093598730425n

// Reference (Non-primitive)

// Arrays, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Himani",
    age: 20
}

const myFunction = function() {
    console.log("Hello world")
}

console.log(typeof outsideTemp)
console.log(typeof myFunction);
