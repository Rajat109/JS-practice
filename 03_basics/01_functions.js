function sum(a, b){ // a,b are called parameteres when we define the function
    return a+b
}

sum(3,4)  // here 3 & 4 are called arguments

 function loginUserMessage(username = "raj"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage())

 function calculatePrice(...num){ 
    return num
 }
/// ... is called rest operator here and now we can pass any number of arguments in the function and it will return an array of all the elements

 console.log(calculatePrice(100, 200, 300, 400))
 // output: [ 100, 200, 300, 400 ]

 const user = {
    username: "rajat",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject(user) // we can pass already defined object

 // we can also pass a new object as an argument
 handleObject({
    username: "shreya",
    price: 999
 })

 const myArr = [100, 200, 300]

 // passing array in a function
 function returnArrValue(getArr){
    return getArr[2]
 }

console.log(returnArrValue(myArr));
