// for of loop

// ["", "", ""]
// [{}, {}, {}] 

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // map will have unique values so no duplication
map.set('US', "United States")
map.set('EN', "England")

console.log(map);


// destructuring the map in key value pairs separately
// for (const [key, value] of map) { 
//     console.log(`${key} :- ${value}`);
// }

const myObj = {
    game1: "NFS",
    game2: "TOD"
}

// we can't use for-of loop on objects in this way

// it will throw error "myObj is not iterable"
// for (const [key, value] of myObj) { 
//     console.log(`${key} :- ${value}`);
// }

