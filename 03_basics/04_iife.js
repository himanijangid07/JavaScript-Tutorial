// Immediately Invoked Function Expressions (IIFE)

(function chai() { // this is named IIFE
    console.log(`DB CONNECTED`)
})(); // to remove the pollution of global scope we use IIFE

( () => { // this is unnamed IIFE
    console.log(`DB CONNECTED TWO`)
})(); // we need to add ";" because we need to tell where the IIFE ends

( (name) => { // this is parametrized IIFE
    console.log(`DB CONNECTED ${name}`)
})('himani');