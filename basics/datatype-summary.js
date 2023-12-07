// Two types

// 1. Primitive (Call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol(123)
const id2 = Symbol('123')

console.log(id); 
console.log(id2); 
console.log(id == id2);
console.log(id === id2);

const bigNumber = 213221456886645n // to make a number bigInt we add 'n' at the end


// JS is a dynamically typed language

// 2. Non-Primitive (Call by Reference)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraaj", "Doga"] // array

// object example
let myObj = {
    name: "Rajat",
    age: 22,
    loggedIn: true
}

// function example
const myFunction = function(){
    console.log("Hello Rajat")
}

console.log(typeof(id));

