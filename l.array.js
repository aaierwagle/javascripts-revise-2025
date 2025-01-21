//? array js
//?  collection of data (of any data type)
//? preserves order of data inserted
//?  has index
//? index starts from zero

// let numbers = [
//   1,
//   12,
//   43,
//   23,
//   "45",
//   null,
//   true,
//   undefined,
//   { name: "Salon" },
//   ["Ram", "Shyam"],
// ];

// console.log(typeof numbers);
// console.log(numbers);

// let students = ["Abhisek", "Arya", "Kalyan", "Raghab"];
// console.log(students, typeof students);

// let students = {
//   0: "Abhiskek",
//   1: "Arya",
//   2: "Kalyan",
//   3: "Raghab",
// };

// console.log(students[0]);
// students[0] = "Riwaz";
// console.log(students);

// let laptopList = ["Asus", "Apple", "MSI", "Acer"];

// console.log(laptopList.length);
// console.log(laptopList);
// console.log(laptopList[0]);
// console.log(laptopList[1]);
// console.log(laptopList[2]);
// console.log(laptopList[3]);

// for (let i = 0; i < laptopList.length; i++) {
//   console.log(laptopList[i]);
// }

// ? methods
// ? push , pop, shift ,unshift, reverse,includes

// let numList = [45, 55, 65, 75];
// ? push => adds item to end of array
// numList.push(85, 95, 105);

// ? pop => removes last item from array
// numList.pop();
// numList.pop();

// ? shift
// ? remove item from start of array
// numList.shift();

// ? unshift => adds item to start of array
// numList.unshift(25, 35);

// console.log(numList);

// ? reverse
// const vehicleBrands = ["Tesla", "BYD", "Toyota", "BMW"];
// vehicleBrands.reverse();

// console.log(vehicleBrands);

// ? includes => results in true of false
// ? checks whether the value exists in array or not
// const vehicleBrands = ["Tesla", "BYD", "Toyota", "BMW"];

// console.log(vehicleBrands.includes("Tata")); //false
// console.log(vehicleBrands.includes("Tesla")); //true

// ? map, filter,find (loop)

// ? map
// ? always  return an array
//? when we try to change elements in array
// ? original array length is always equal to returned array length

// const priceList = [45, 105, 52];

// const returnedArray = priceList.map((item, index, array) => {
//   let newItem = item + 5;

//   return newItem;
// });

// console.log(returnedArray);

// const users = ["HIMAL", "SANJAY", "BIBIKA", "ASHRITI"];

// const newUsers = users.map((item, index, array) => {
//   if (item === "BIBIKA") {
//     return item;
//   }

//   let lowerCaseItem = item.toLowerCase();

//   return lowerCaseItem;
// });

// console.log(newUsers);

// const laptopList = ["asus", "apple", "msi", "acer"];

// const newLaptopList = laptopList.map((item, index, array) => {
//   let capitalCasedItem = item.toUpperCase();

//   return capitalCasedItem;
// });

// console.log(newLaptopList);

// const studentList = [
//   {
//     name: "Prasanna Shakya",
//     roll: 14,
//     isTall: false,
//   },
//   {
//     name: "Rujit Shrestha",
//     roll: 18,
//     isTall: true,
//   },
//   {
//     name: "Adarsa Gautam",
//     roll: 3,
//     isTall: true,
//   },
//   {
//     name: "Kajol Pandey",
//     roll: 9,
//     isTall: false,
//   },
//   {
//     name: "Sumit Karna",
//     roll: 24,
//     isTall: true,
//   },
// ];

// const newStudentList = studentList.map((item, index, array) => {
//   item.roll = item.roll + 10;

//   return item;
// });

// console.log(newStudentList);

// ? filter
//? returns array
// ? to remove certain element from array
// ? high chances => original array length not equal to returned array length
// ? does not change values
// ? returns all data which satisfies the condition
// const priceList = [45, 51, 30, 60, 10, 11];

// const newPriceList = priceList.filter((item, index, array) => {
//   return item > 50;
// });

// console.log(newPriceList);

// const studentList1 = ["Lokendra", "Sambad", "Riwaz", "Elisha"];

// const newStudentList = studentList1.filter((item, index, self) => {
//   return item !== "Riwaz";
// });

// console.log(newStudentList);

// ? find
// ? returns first data which satisfies provided condition

// const numList = [5, 55, 50, 90, 21, 39, 43, 105];

// const requiredNumber = numList.filter((item, index, self) => {
//   console.log(item);
//   if (item > 100) {
//     return item;
//   }
// });

// console.log("number", requiredNumber);
