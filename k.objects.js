//? objects

// key value pair in js

//complex data structure

// student1
// let studentName = "Nitesh";
// let studentRoll = 25;
// let studentAddress = "Balkumari";
// let isGraduated = true;
// let studentImage = null;

// student2
// let studentName2 = "Rujit";
// let studentRoll2 = 55;

// let nationality = "Nepali";

// object (key value pair)

// let student1 = {
//   name: "Nitesh",
//   roll: 13,
//   address: "Balkumari",
//   isGraduated: false,
//   image: null,
//   age: undefined,
// };

// let student2 = {
//   name: "Sambad",
//   roll: 19,
//   address: "Balkumari",
//   isGraduated: false,
//   image: null,
//   age: undefined,
// };

// console.log(student1);
// console.log(typeof student1);

// CRUD
// C => Create/Add
// R => Retrieve/Read
// U => Update/Edit
// D => Delete/Remove

// let collegeDetails = {
//   name: "HCOE",
//   color: "Blue",
//   students: 500,
// };

// to access data
// dot operator
// square bracket

//? DELETE
// delete collegeDetails.name;
// delete collegeDetails["color"];
// console.log(collegeDetails);

// ? UPDATE
// ? UPSERT => Update or Insert
// collegeDetails.name = "KEC";
// collegeDetails["color"] = "Green";
// console.log(collegeDetails);

// ?Read
// console.log(collegeDetails.name);
// console.log(collegeDetails.color);
// console.log(collegeDetails["students"]);

//? Create /Add
// collegeDetails.location = "Chyasal";

// collegeDetails["affiliatedTo"] = "TU";

// console.log(collegeDetails);

// ?nested object
// ?object inside object is called nested object

//  key => property/ field

// let personDetails = {
//   name: "Lokendra Joshi",
//   age: 21,
//   address: {
//     temporary: "Biratnagar",
//     permanent: "Kathmandu",
//   },
// };

// personDetails.address.temporary = "Lalitpur";
// personDetails.address.friendAddress = "Dhangadhi";
// console.log(personDetails);
//? Print out result like
//? "My name is Lokendra Joshi and I am from Kathmandu."

// console.log(
//   `My name is ${personDetails.name}
//    and I am from ${personDetails["address"]["permanent"]}.`
// );

// console.log(personDetails.address);
// console.log(personDetails.address.temporary);

// console.log(personDetails["address"]["permanent"]);
// console.log(personDetails.address["temporary"]);

// ? fetch object value through dynamic key
const laptopDetails = {
  name: "F15",
  brand: "Asus",
  color: "grey",
  ssd: 512,
};

let searchBy = "ssd";
console.log(laptopDetails[searchBy]);
