// *** reduce method ***

const myNums = [1, 2, 3]


/* reduce function takes two parameters

1. Callback function which itself takes two parameters
    1.1 accumulator : which starts with initial value and keep updating with the return value
    1.2 currentValue : it is the current value of the array on which the iteration is currently

2. An initial value to start the function

at last the function returns the value of accumulator

*/

const initVal = 1
const total = myNums.reduce( (acc, currval)=> {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc * currval
}, initVal)

console.log(total);

const shoppingCart = [
    {
        itemName: " course1",
        price: 1000
    },
    {
        itemName: " course2",
        price: 2000
    },
    {
        itemName: " course3",
        price: 3000
    },
]

let totalCost = shoppingCart.reduce((acc, item) =>{
    return acc + item.price
}, 0)

console.log(totalCost);