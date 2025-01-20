// function
//  block of code which performs certain actions

// reusability of code

//? check if following numbers are odd or even : 25,75,35,45,61

// ? syntax
// function functionName(){
// some code here
// }

// sayHi();

// function sayHi() {
//   console.log("Hi");
// }

// function sayHi() {
//   console.log("Hi");
// }

// sayHi();

// ? arrow function

//? syntax

// const  functionName =  ()=>{
// some code here
// }

// const sayHello = () => {
//   console.log("Hello");
// };

// sayHello();

// const greetUser = (userName) => {
//   console.log(`Good afternoon ${userName}`);
// };

// greetUser("Abhishek");

// const calculateSum = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };

// calculateSum(25, 35);

// console.log(calculateSum(10, 20));

// const result = calculateSum(5, 6);
// console.log(result);

// WAF to calculate whether a number is odd or even

// DRY => Do-not Repeat YourSelf
// const calculateOddEven = (num) => {
//   let remainder = num % 2;

//   if (remainder === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// console.log(calculateOddEven(50));

// const result = calculateOddEven(11);
// console.log(result);

// one liner
// const getProduct = (x, y) => x * y;

// console.log(getProduct(5, 6));

// const calculateOddEven = (num) => (num % 2 === 0 ? "even" : "odd");

// console.log(calculateOddEven(2));
// console.log(calculateOddEven(41));
// console.log(calculateOddEven(23));

// ?WAF that converts dollars into cents.

// const convertDollarToCents = (dollar) => dollar * 100;

// const cents = convertDollarToCents(7);
// console.log(`Cent value is ${cents}`);

//? Write a function that takes “add”/“subtract”/”multiply”/”divide”
//? and two numbers as parameters and perform appropriate operations.

// const performCalculation = (option, x, y) => {
//   let result;

//   switch (option) {
//     case "+":
//       result = x + y;
//       break;

//     case "-":
//       result = x - y;
//       break;

//     case "*":
//       result = x * y;
//       break;

//     case "/":
//       result = x / y;
//       break;

//     default:
//       console.log("Invalid option");
//   }

//   return result;
// };

// console.log(performCalculation("-", 7, 9));

//? nested function

// ? function returning function
//  function inside a function is called nested function

// const printValue = (value) => {
//   console.log(value);
// };

// const doSum = (x) => {
//   const performAdd = (y) => {
//     let sum = x + y;

//     return sum;
//   };

//   return performAdd;
// };

// const sthg = doSum(5);

// const result = sthg(15);

// console.log(result);

// ?call back function
// ? function passed as a parameter to another function

const printValue = (value) => {
  console.log(value);
};

const getANumber = () => {
  return 100;
};
const getSum = (x, y, fn) => {
  let sum = x + y;

  fn(sum);
};

getSum(2, getANumber(), printValue);
