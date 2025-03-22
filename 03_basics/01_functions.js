function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("I")
}

// sayMyName() // this is function execution
// sayMyName // this is function reference

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2)
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(4, 6)
// console.log(result)

function loginUserMessage(username) { // for default value, we can write username = "sumit"
    if(username === undefined) { // another syntax is if(!username)
        console.log("Please define a username") 
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("himani"))

function calculateCartPrice(val1, val2, ...num1) { // in this case "..." operator is called rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    name: "himani",
    course: "B.Tech"
}

function handleObject(anyObject) {
    // console.log(`Name is ${anyObject.name} and course is ${anyObject.course}`)
}

// handleObject(user)
handleObject({
    name: "himani",
    course: "B.Tech"
})

const myArr = [100, 200, 300]

function returnSecondValue(arr) {
    return arr[1]
}

// console.log(returnSecondValue(myArr))
console.log(returnSecondValue([200, 400, 600]))