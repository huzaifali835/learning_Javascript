let score = 33; // number
let score_1 = "33"; // String
let score_2 = "33abc"

let check = null
console.log(check)
let checkValueInNumber = Number(check)
console.log(typeof checkValueInNumber)
console.log(checkValueInNumber)

let check_1 = undefined
console.log(check_1)
let checkValueInNumber_1 = Number(check_1)
console.log(typeof checkValueInNumber_1)
console.log(checkValueInNumber_1)

let check_2 = true // 1 when converting in number while 0 in false.
console.log(check_2)
let checkValueInNumber_2 = Number(check_2)
console.log(typeof checkValueInNumber_2)
console.log(checkValueInNumber_2)

// console.log(typeof score);
// console.log(typeof(score_1));

// // Conversion of datatypes using builtin methods.
 
// let numberInString = String(score);
// console.log(typeof numberInString);

// let stringInNumber = Number(score_1);
// console.log(typeof stringInNumber);

// console.log(score_2);
// console.log(typeof score_2)
// let stringInAlphaNumber = Number(score_2);
// console.log(typeof stringInAlphaNumber);
// console.log(stringInAlphaNumber) // Nan => Not a number