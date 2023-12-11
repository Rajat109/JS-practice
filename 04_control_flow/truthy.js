const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Don't have email");
}

// Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy values:
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log(`Array is empty`);
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty obj");
}

// *** Nullish Coalescing Operator (??) : null undefined
// works only with null and undefined as a safety checker

let val1;
val1 = 5 ?? 10 // output will be 5 as first value is assigned

val1 = null ?? 10 // output will be 10 as first value is null

val1 = undefined ?? 12 // output will be 12 as first value is undefined

val1 = null ?? 10 ?? 20 // output will be 10 


// ***** Terniary Operator ( condition ? true : false )

const price = 100
price <= 80 ? console.log("Less than 80") : console.log("more than 80");