const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor)

const myNewObject = Object.create(null)

const himani = {
    name: "himani",
    age: 20,
    course: "B.Tech",

    completed: function() {
        console.log(`course is not yet completed`)
    }
}

console.log(Object.getOwnPropertyDescriptor(himani, "name"))

// Object.defineProperty(himani, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(himani, "name"))

for (let [key, value] of Object.entries(himani)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}