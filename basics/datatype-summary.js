// Two types

// 1. Primitive (Call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol(123)
const id2 = Symbol('123')

// console.log(id); 
// console.log(id2); 
// console.log(id == id2);
// console.log(id === id2);

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

//console.log(typeof(id));



// ************** Memories ********************

// Stack memory(Primitive), Heap memory(Non-primitve)

// Example of primitive datatype and stack memory
let myEmail = "rajat@gmail.com"

let myAnotherEmail = myEmail

myAnotherEmail = "rajat111@gmail.com"

console.log(myEmail); // output=> rajat@gmail.com
console.log(myAnotherEmail);// output=> rajat111@gmail.com

// in Primitive data types a copy of data is sent and on changing the data inside myAnotherEmail the data inside myEmail does not change

// Example of Non-Primitive datatype and heap memory

let userOne = {
    email:"user1@gmail.com",
    upi:"user1@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);// output=> user2@gmail.com
console.log(userTwo.email);// output=> user2@gmail.com

// In non primitive datatypes heap memory is used and which is referenced when used by another variable
// so when we changed data inside userTwo.email tha data inside userOne.email also got changed

