const name = "himani"
const count = 20

// console.log(name + count + " numbers");

// console.log(`name is ${name} and count is ${count}`);

const gameName = 'himani-hj-com'

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.charAt(2)) // to find the character at a specific position

// console.log(gameName.indexOf('n')); // to find the index of a specific character

const newString = gameName.substring(0, 4) // first value is start number, second is end number (end number is not inclusive, but start number is!!!)

// if we provide negative value in substring, it will ignore that and start from 0

// console.log(newString);

const anotherString = gameName.slice(-8, 5) // it will return a section of the string, it given a negative value, will start from reverse 

// console.log(anotherString);

const newStringOne = "        himani          "
// console.log(newStringOne);
// console.log(newStringOne.trim())

const url = "https://himani.com/himani%20jangid"

// console.log(url.replace("%20", "-"))

// console.log(url.includes("himani"))

console.log(gameName.split('-'))