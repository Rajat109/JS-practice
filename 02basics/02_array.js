const marvel = ["thor", "hulk", "ironman"]
const dc = ["batman", "superman", "flash"]

// joining two arrays using concat

const all_heros = marvel.concat(dc)
console.log(all_heros);

// joining two arrays using the spread operator 
// this is the modern method and used more in industry
const all_heros_new = [...marvel,...dc]
console.log(all_heros_new);

const newArr = [1, 2, 3, [4, 5, 6, [11, 12, 13]]]

// Flat returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. here we used infinity so that all the depths are covered
console.log(newArr.flat(Infinity));

// isArray tells us whether given parameter is an array or not
console.log(Array.isArray("rajat"));

// from converts it into array
console.log(Array.from("rajat"));

// it will return empty array as we have passed an object but have not specified from keys or values
console.log(Array.from({name: "rajat"})); 

let score1 = 100
let score2 = 200
let score3 = 300

// it will make an array of the passed parameters
console.log(Array.of(score1, score2, score3))