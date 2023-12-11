// if

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log(`Allowed`);
}

// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 121

switch (month) {
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`Feb`);
        break;
    case 12:
        console.log(`December`);
        break;

    default:
        console.log(`Not a month`);
        break;
}

