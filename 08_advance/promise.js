
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// creating promises for asynchronous programming

// first promise

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network calls etc

    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

// consumption of promise 

promiseOne.then(function(){
    console.log("promise consumed");
})

// second promise

new Promise(function(resolve, reject){
    setTimeout(() =>{
        console.log("async task 2 done");
        resolve() // by writing this we kind of connect resolve with then
    }, 1000)
}).then(()=>{
    console.log("async 2 resolved")
})

// third promise 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "rajat109", email: "rajatagarwal.109@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// forth promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'rajat', password: '123'})
        }
        else{
            reject("Error: something went wrong")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("the promise Four is either resolved or rejected"))

// above is the example of chaining of then 

// promise 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'promise-5', password: '123'})
        }
        else{
            reject("Error: promise-5 went wrong")
        }
    }, 1000)
})

// consumption of promise using async and await
// but we have to wrap that using try-catch to handle the errors

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// json data handling


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

//  writing the above code using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data[0])
}).catch((err)=>{
    console.log(err);
})

