const score = 100
//console.log(score);

const balance = new Number(500.99)

//console.log(balance.toFixed(1));

const otherNum = 129.874
//console.log(otherNum.toPrecision(4))

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));


// ************* MATHS *******************

// console.log(Math.abs(-4))  // output: 4
// console.log(Math.round(4.49)) // output: 4
// console.log(Math.ceil(4.49))  // output: 5
// console.log(Math.floor(4.49)) // output: 4


console.log((Math.random())); // It gives random value between 0 and 1
console.log((Math.random()*10) + 1); // we have added one so that the value is min 1 or above

console.log(Math.floor(Math.random()*10) + 1) // we have used floor function to get the integer value only 

// to get the random value in a range we do as follows

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min); // we have multiplied by (max - min + 1) and added min to get the values in the range of max and min
