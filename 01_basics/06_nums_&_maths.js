const score = 400
// console.log(score);

const number = new Number(100)
// console.log(number)

// console.log(number.toString().length)
// console.log(number.toFixed(2))

const otherNumber = 123.89
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ************ MATHS ************

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.01))
// console.log(Math.floor(4.99))
// console.log(Math.min(4, 3, 5, 2))
// console.log(Math.max(4, 3, 5, 2))

// console.log(Math.random()) // gives the random values in between 0 and 1
// console.log(Math.random()*10 + 1) // gives the random values starting from 1
// console.log((Math.random()*10) + 1) // gives the random values starting from 1
// console.log(Math.floor(Math.random()*10) + 1) // gives the random floored values

const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // will give the value in between the minimum and maximum values