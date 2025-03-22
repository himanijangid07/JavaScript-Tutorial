// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction'},
    { title: 'Book Two', genre: 'History'},
    { title: 'Book Three', genre: 'Non-Fiction'},
    { title: 'Book Four', genre: 'History'},
    { title: 'Book Five', genre: 'Non-Fiction'},
    { title: 'Book Six', genre: 'Fiction'}
]

// const userBooks = books.filter((bk) => bk.genre === 'History')

const userBooks = books.filter((bk) => {return bk.genre === 'History'})

console.log(userBooks)