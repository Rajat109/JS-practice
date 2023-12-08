const name = "Rajat"
const repoCount = 10

// old and not a good practice to concatenate strings
//console.log(name + repoCount + "good");

// new and better way using string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to defining strings
const fullName = new String('rajat-agarwal-new')

console.log(fullName.toUpperCase())
console.log(fullName.charAt(5))
console.log(fullName.indexOf('a'))
console.log(fullName.length);

const newString = fullName.substring(0,5)
console.log(newString);

const anotherString = fullName.slice(-6,2)
console.log(anotherString);

const newStringOne = "   rajat   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajat.com/home%20page"

console.log(url.replace('%20','-'));

console.log(url.includes('homee'));

console.log(fullName.split('-'));
