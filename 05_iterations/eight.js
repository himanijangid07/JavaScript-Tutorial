const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`${acc} + ${currval} = ${acc + currval}`)
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "c++ course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)