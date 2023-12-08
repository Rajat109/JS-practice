// Array declaration 

const myArr = [0, 1, 2, 3, 4, 5]
const names = ["rajat", "paras", "anshit"]

const myArr2 = new Array(1, 2, 3)
// console.log((myArr2[2]));

// Array methods

// to insert an element at last
myArr.push(6)
// console.log(myArr);

// to remove the last element from array
myArr.pop()
// console.log(myArr);

// to add an element in the starting of array
myArr.unshift(9)
// console.log(myArr)

// to remove the first element from array
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof myArr)
// console.log(typeof newArr) // join makes it string 

// slice and splice

console.log("A ", myArr);

const newArr1 = myArr.slice(1,3) // it takes value from index 1(inclusive) to 3(exclusive)
console.log(newArr1);

console.log("B ", myArr);

const newArr2 = myArr.splice(1,3) // splice alters the original array i.e. myArr and takes out elements from index 1(inclusive) to 3(inclusive)
console.log(newArr2);

console.log("C ", myArr);
