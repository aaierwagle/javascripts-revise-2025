// ?conditionals

// let num1 = 5;

// let num2 = 10;

// if (false) {
//   console.log("Hi");
// }

// console.log(num1 + num2);

// ? if

// ? syntax1
// if(condition){
// some code here
// }

// ? syntax2
// if(condition){
// some code here
// }else{
// some code here
// }

// let user1 = "Umesh";
// let user2 = "Umesh";

// if (user1 === user2) {
//   console.log("User 1 and user 2 are same");
// } else {
//   console.log("Both are different user");
// }

//?  take any number and print whether the number is "odd" or "even"
// let num = 106;

// let remainder = num % 2;

// if (remainder === 1) {
//   console.log(`${num} is odd`);
// } else {
//   console.log(`${num} is even`);
// }

// ? 4.Find the largest of three numbers having all numbers are different.

// let num1 = 555;
// let num2 = 10;
// let num3 = 25;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greatest");
// } else if (num2 > num3) {
//   console.log("num2 is greatest");
// } else {
//   console.log("num3 is greatest");
// }

// ?5.Perform arithmetic operation based on the option provided.
// ?Set two variables with numbers.
// ?Create another variable called “option”
// ?which can be add/subtract/multiply/divide/power.
// ?Based upon the value of the option. Perform appropriate operation.
// ?e.g. if option is “add”, perform num1+num2

// ? switch => multiple choice question

// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// ?ternary

let isMarried = true;

// if (isMarried) {
//   console.log("This person is Married");
// } else {
//   console.log("This person is Unmarried");
// }

// isMarried ? console.log("Married Person") : console.log("Unmarried person");

// ? find if a number is positive or negative or zero using ternary

let num = -0;

// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

num > 0
  ? console.log("Positive")
  : num < 0
  ? console.log("Negative")
  : console.log("Zero");
