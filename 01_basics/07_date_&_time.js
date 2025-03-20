// Dates

const myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2004, 9, 7)
// console.log(myCreatedDate.toDateString())

myCreatedDate = new Date(2024, 2, 23, 5, 12, 34)
// console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("2024-03-23")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())
// console.log(Math.floor(myCreatedDate.getTime()/1000))
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

// console.log(`The date is ${newDate.getDate()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: "long"
})