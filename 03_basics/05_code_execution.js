let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let res = num1 + num2
    return res
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// **** execution of this js program ****

/*
    1. Global Execution => this

    2. Memory Creation phase
    val1 => undefined
    val2 => undefined
    addNum => definition
    result1 => undefined
    result2 => undefined

    3. Execution Phase
    val1 = 10 // line 1
    val2 = 5 // line 2

    // line 9 because definition has not be executed but when we call the function then it gets executed
    addNum => {
        new variable env + execution thread

        1. Memory phase 
        val1 = undefined , val2 = undefined
        res = undefined

        2. Execution phase
        num1 = 10
        num2 = 5
        res = 15 (it will be returned to global execution context)
    }

    
    result1 = 15 // line 9 


    // line 10 as addNum function is called again to return the result in result2 variable so again new execution thread for the function will be created

    addNum => {
        new variable env + execution thread

        1. Memory phase 
        val1 = undefined , val2 = undefined
        res = undefined

        2. Execution phase
        num1 = 10
        num2 = 2
        res = 12 (it will be returned to global execution context)
    }

    result2 = 12 // line 12 result2 updated 


*/