// singleton objects are created using literal
// Object.create()


// object literals

let mySym = Symbol("key1") // defining a symbol and using it as a key in object

const jsUser = {
    name: "Rajat",
    "full name": "Rajat Agarwal",
    age: 23,
    location: "bareilly",
    email: "rajat@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["saturday", "sunday"],
    [mySym]: "myKey1", //using the already defined symbol
}

// two methods to access object properties

// console.log(jsUser.email); // dot notation to access object key values

// console.log(jsUser["email"]); // sqaure notation to access key values

// console.log(jsUser["full name"]); // sqaure notation to access key values

// console.log(jsUser[mySym]); // this is the method to access the symbol inside an object literal

// console.log(Object.keys(jsUser)) // symbol is not shown when we list the keys of the object


jsUser.email = "rajatagarwal@gmail.com" // to change the object values

// Object.freeze(jsUser) // to feeeze the object so that no changes can be made

jsUser.email = "paras@gmail.com" // this change will not take place as we have freezed our object

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello user");
}

jsUser.greetingNew = function(){
    console.log(`Hello user ${this.name}`);
} // here we have used this keyword as we had to reference the same object i.e. jsUser

console.log(jsUser.greetingNew());