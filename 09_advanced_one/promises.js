const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function() {
    console.log('Promise consumed')
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 1000);
}).then(function() {
    console.log('Async 2 resolved')
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Himani", email: "himani@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "Himani", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(e) {
    console.log(e)
}).finally(() => console.log('The promise is either resolved or rejected'))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 2000)
})

async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://api.github.com/users/himanijangid07')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/himanijangid07')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})