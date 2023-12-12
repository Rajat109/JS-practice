// for

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(`${i}*${j} = ${i*j} `);
        
//     }
// }

let myArr = ["flash", "batman", "superman"]

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }

// break and continue

// for (let index = 1; index < 21; index++) {
//     if(index == 5){
//         console.log(`5 is found`);
//         break;
//     }
//     console.log(`value of index is ${index}`);
// }

// for (let index = 1; index < 21; index++) {
//     if(index == 5){
//         console.log(`5 is found`);
//         continue;
//     }
//     console.log(`value of index is ${index}`);
// }


// while and do while

// let index = 0
// while(index <= 10){
//     console.log(`value of index is ${index}`);
//     index += 2
// }

// let len = 0
// while(len < myArr.length){
//     console.log(`value is ${myArr[len]}`);
//     len++
// }

let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score<10);