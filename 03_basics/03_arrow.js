const user = {
     username: "rajat",
     age: 22,

     welcomeMessage: function(){
        console.log(`welcome to website, ${this.username}`);
        console.log(this); // it will return the current context that is user object
     }
}

// user.welcomeMessage()

// user.username = "anshit" // here we have changed the property inside the user object
// user.welcomeMessage()

console.log(this) // it will return an empty object as there in no cuurent context in the global scope

function chai(){
    let username = "rajat"
    console.log(this.username) // it will return undefined as we can't use this in a function
}

// chai()

const newFun = () => {
    let username = "rajat"
    console.log(this); // it will return an empty object
}


// newFun()

// first method to use arrow function
const add = (num1, num2) =>{
    return num1 + num2
}


// another method to use arrown function without return keyword 
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(8,2))

// *** important note***

// if we wrap arrow function definition in curly braces then we will have to use return keyword otherwise if we wrap it into parenthesis then we don't have to use return keyword


// returning an object through arrow function

const fun1 = () => ({username: "rajat"})

console.log(fun1())

