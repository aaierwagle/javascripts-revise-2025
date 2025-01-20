// loop
// repetition
// ? for, while, do..while

// syntax
// for(initial_value;condition; increment/decrement){
// some code here
// }

// for (let i = 1; i <= 5; i = i + 1) {
//   console.log(i);
// }

// ?Write a for loop to print values from 10 to 50

//? WAFL to print values from 100 to 50

// for (let i = 100; i >= 50; i = i - 1) {
//   console.log(i);
// }

// ?WAP to find if the number is prime or not

// let num = 10006;

// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   let remainder = num % i;

//   if (remainder === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(`${num} is ${isPrime ? "prime" : "composite"}`);

// ? while loop

// WAP  to print numbers from 10 to 20

// initial_value
// while(condition){
// some code here
// increment/decrement
// }

// let i = 10;

// while (i <= 20) {
//   console.log(i);

//   i++;
// }

// WAP to print values from 100 to 75 using while loop

// let i = 100;

// while (i >= 75) {
//   console.log(i);
//   i--;
// }

//?  WAP to find prime numbers between 2 to 100

for (let i = 10; i <= 100; i++) {
  let isPrime = true;
  for (j = 2; j < i; j++) {
    let remainder = i % j;

    if (remainder === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

//? do...while

// initial_value
// do {
// some code here
// increment/decrement
// }while(condition);

// WAP to print values from 10 to 20 using do...while

// let i = 10;
// do {
//   console.log(i);

//   i++;
// } while (i <= 20);
