"use strict"; // treat all JS code as newer version

// alert("hello") we are using nodejs, not browser so it will not work here

let name = "rajat" //string
let age = 23 // number
let isLoggedIn = false // boolean
let state;

// number => 2 to power 53
// bigint
// string
// boolean
// null (stand-alone value) it is a JS object
// undefined => it is a undefined datatype
// symbol => uniqueness 

// object



let score = "33"
//console.log(typeof score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)

// "33" => 33
// "33abs" => NaN
// true => 1

let loggedIn = "a"
let boolLoggedIn = Boolean(loggedIn)
//console.log(boolLoggedIn);

// 1=> true
// "" => false

let num = 12
let stringNum = String(num)
//console.log(stringNum);

// *** Operations ****

let value = 3 
let negValue = -value
//console.log(negValue)

let str1 = "hello"
let str2 = " Rajat"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2 + 2); // if string is first then everything will be treated as a string
// console.log(1 + 2 + "2"); // if numbers are first then first operation will be performed and then it will be treated as string
// console.log(1 + "2" + 3); // here also output will be 123 because everything will be treated as a string
// console.log("2" + "2");

 
// while using comparison in JS we should always compare similar data types
// equality operators ("==" & "===") and comparison operators work differently in JS and may sometimes give unexpected output when compared between diff datatypes or with null & undefined
