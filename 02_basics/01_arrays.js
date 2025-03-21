// arrays

const myArr = [1, 2, 3, 4, 5]
// console.log(myArr[0]);

const anotherArr = new Array(1, 2, 3, 4, 5)
// console.log(anotherArr[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// slice, splice

console.log("A = ", myArr)

const myn1 = myArr.slice(1, 3) // will return the section of array, inclusive of the first value and exclusive of the second value
console.log("B = ", myn1)

const myn2 = myArr.splice(1, 3) // it manipulates the original array, and then returns the section of the array
console.log(myn2)

console.log("C = ", myArr)