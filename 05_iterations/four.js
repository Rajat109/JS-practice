// forEach function

const coding = ["js", "ruby", "cpp", "java", "python"]

// forEach is a built in prototype in arrays and we have to pass a callback function as a parameter in it
coding.forEach( (item) => {
    console.log(item);
})


function printMe(item) {
    console.log(item);
}

// we can also pass the REFERENCE of an already defined function as a parameter
coding.forEach(printMe)


// forEach has an access to each item, index of that item and the entire array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


// forEach in an array of objects
const myCoding = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "C++",
        langFile: "cpp"
    },
    {
        langName: "Python",
        langFile: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.langName);
})