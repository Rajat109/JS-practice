function one(){
    const userName = "rajat"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "rajat"
    if(username === "rajat"){
        const website = "youtube"
        console.log(username + website)
    }
    
}


// ************ Interesting *****************


console.log(addone(5));
// this function can be called even before declaration 
function addone(num){
    return num + 1
}

console.log(addTwo(5));

// this is called expression and we can not call this before the declaration
const addTwo = function(num){
    return num + 2
}
