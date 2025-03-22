// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sweetu"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "himani@gmail.com",
    fullname: {
        userfullname: {
            firstName: "himani",
            lastName: "jangid"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}
const obj4 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3)

const users = [
    {
        id: 1,
        name: "Himani"
    },
    {
        id: 2,
        name: "Sumit"
    },
    {
        id: 3,
        name: "Vishal"
    }
]

// console.log(users[1].name)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(instructor)

// {
//     "name": "himani",
//     "courseName": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]