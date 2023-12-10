// Immediately Invoked Function Expression (IIFE)

// These are used to get rid of global polution and immediately execute the function as we run our application

// method one to declare IIFE

(function one(){
    console.log(`automatically invoked 1`)
})();

// one very important thing to note is that we have to use semicolon after the IIFE declaration because it will tell the system to stop the execution of function 

// another method to declara IIFE

( (name)=>{
    console.log(`automatically invoked 2 ${name}`);
})("rajat");