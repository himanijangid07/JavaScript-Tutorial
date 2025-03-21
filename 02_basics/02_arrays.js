const my_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["flash", "batman", "superman"]

// my_heros.push(dc_heros) // it will add the new array as an array itself and "changes the original array and does not returns a new array"

// console.log(my_heros)
// console.log(my_heros[3][2])

// const allHeros = my_heros.concat(dc_heros) // it will add the elements of the another array as the single elements, like as usual, "but returns a new array"

// console.log(allHeros)

const all_new_heros = [...my_heros, ...dc_heros] // works in a similar manner as of concat method

// console.log(all_new_heros)

const another_arr = [1, 2, 3, [4, 5], 7, [6, 7, [4, 5]]]

const myArr = another_arr.flat(Infinity) // it spreads out the array regardless of how many arrays are there in a single array and here "infinity defines the depth of the array"
// console.log(myArr)

// console.log(Array.isArray("Himani"))
// console.log(Array.from("Himani"))

// console.log(Array.from({name: "Himani"})) // in this case it will not create the array, as first we have to pass that from which elements the array should be made, like either the keys array should be made or the values array should be made

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // it will create the array with multiple values being passed in it