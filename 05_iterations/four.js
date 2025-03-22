const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key) // this will only return the keys of the object
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`) // this will give both the keys and the values
}

const programming = ["js", "cpp", "py", "java"]

for (const key in programming) {
    // console.log(key) // this will return only the keys such as 0, 1, 2, etc
}

for (const key in programming) {
    // console.log(programming[key])
}

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key)
// }