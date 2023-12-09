//const appUser = new Object() // singleton object

const user = {} // non-singleton object

user.id = "123abc"
user.name = "rajat"
user.isLoggedIn = true

const newUser = {
    email: "123@gmail.com",
    username: {
        fullname: {
            firstname: "Rajat",
            lastname: "agarwal"
        }
    }
}

console.log(newUser.username.fullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2) // we will use this method to merge two or more objects and we pass {} this as the fist paramenter so that it acts as a target and all the objects are assigned in it only

const obj4  = {...obj1, ...obj2} // using spread operator to merge the objects 

console.log(obj4);
console.log(obj1);


// object with an array of objects inside it
const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    },
    {
        id: 4,
        email: "4@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(user)); // returns all the keys in an array

console.log(Object.values(user)); // returns all the values in an array

console.log(Object.entries(user)); // converts all the key-value pairs in arrays

console.log(Object.hasOwnProperty("name")); // checks whether the object has given property or not